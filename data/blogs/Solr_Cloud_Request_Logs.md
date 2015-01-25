Rotating Solr Cloud Request Logs
================================

My co-worker and I recently solved an issue that was not directly Google-able.  That is, searching for "Rotating Solr Cloud request logs" didn't immediately answer our question (at the time), so we had to piece together information from a few different resources to figure out how to accomplish what we wanted to do.  This post shares our troubleshooting process and one solution we implemented.

### Problem

Our problem was that the Solr request logs were growing very large (GIGS!) and only rotating every 24 hours.  We wanted to change the request logs to rotate hourly instead of daily.  These are usually simple and straightforward configuration changes, but this one was a little more involved.

If you download Solr (4.10.3 is the latest as of this blog) it comes with Jetty 8.  Looking at the default Jetty configurations that come with Solr, you can see how the request logs are configured:

	<Set name="requestLog">
	  <New id="RequestLogImpl" class="org.eclipse.jetty.server.NCSARequestLog">
	    <Set name="filename">
	       logs/request.yyyy_mm_dd.log
	    </Set>
	    <Set name="filenameDateFormat">yyyy_MM_dd</Set>
	    <Set name="retainDays">90</Set>
	    <Set name="append">true</Set>
	    <Set name="extended">false</Set>
	    <Set name="logCookies">false</Set>
	    <Set name="LogTimeZone">UTC</Set>
	  </New>
	</Set>

From the configuration, we can see that Jetty is configured to use the `NCSARequestLog`.  Initially, we were hoping we could do something simple like change the `filename` and `filenameDateFormat` properties to rotate the request logs hourly, or maybe there would be another configuration property we could add.  But after researching and trying a few different configurations we had no luck.  At this point we decided to look at the [source code](https://github.com/eclipse/jetty.project/blob/jetty-8/jetty-server/src/main/java/org/eclipse/jetty/server/NCSARequestLog.java) for `NCSARequestLog`, and we immediately found the issue.

The `NCSARequestLog` uses the `RolloverFileOutputStream`.  Looking at the `RolloverFileOutputStream` [source code](https://github.com/eclipse/jetty.project/blob/master/jetty-util/src/main/java/org/eclipse/jetty/util/RolloverFileOutputStream.java), there is one interesting line:

	__rollover.scheduleAtFixedRate(_rollTask,midnight.getTime(),1000L*60*60*24);

This little gem hardcodes the `RolloverFileOutputStream` to rotate the log file once a day at midnight.  This was a bummer.  There was no way to configure the `NCSARequestLog` to rotate hourly.

### Jetty 9 saves the day

In Jetty 8, the only classes that implement the `RequestLog` interface are the `NCSARequestLog` and `AsyncNCSARequestLog`, and both use the `RolloverFileOutputStream`.  In our case, we have a 4.10.1 Solr Cloud cluster running on Jetty 9.  We were fortunate to be using Jetty 9.

In Jetty 9, the `NCSARequestLog` was abstracted and a new `Slf4jRequestLog` was implemented that allows output to be sent to SLF4J.  This means we could change change the Jetty configuration to use the `Slf4jRequestLog` and also modify the `log4j.properties` to control the output of the request logs.  This would ultimately give us the flexibility we were looking for.

### Solution

For the Jetty request log configuration, the following XML configures Jetty to use the `Slf4jRequestLog`:

	<Set name="requestLog">
		<New id="RequestLogImpl" class="org.eclipse.jetty.server.Slf4jRequestLog">
		  <Set name="extended"><Property name="requestlog.extended" default="false"/></Set>
		  <Set name="logCookies">false</Set>
		  <Set name="LogTimeZone">GMT</Set>
		  <Set name="logLatency">true</Set>
		</New>
	</Set>

For the `log4j.properties`, we had to add a new appender and configure the logging level for `org.eclipse.jetty.server.RequestLog`:
 
	# Requests logs are INFO level and use the requests appender
	log4j.logger.org.eclipse.jetty.server.RequestLog=INFO,requests
 
	# Time-based rotation for the 'requests' appender:
	log4j.appender.requests=org.apache.log4j.DailyRollingFileAppender
	log4j.appender.requests.DatePattern='.'yyyy-MM-dd-HH
 
	# The requests appender:
	log4j.appender.requests.File=${jetty.home}/logs/solr.requests.log
	log4j.appender.requests.layout=org.apache.log4j.PatternLayout
	log4j.additivity.org.eclipse.jetty.server.RequestLog=false

With these changes, we were able to rotate the Solr request logs hourly:

	solr.requests.log.2015-01-25-16
	solr.requests.log.2015-01-25-17
	solr.requests.log

### Key Takeaway

One of my biggest takeaways from this was to make use of all the resources available when trying to solve a problem.  I often fall into the trap of thinking there is no known solution when it doesn't turn up on a Google search, but there are so many other resources for Software Engineers to take advantage of.  Namely, IRC chat rooms and internet forums dedicated to the software you are working with.  In our case, it was extremely helpful to ask questions on the #solr and #jetty [FreeNode](http://webchat.freenode.net/) IRC channels.