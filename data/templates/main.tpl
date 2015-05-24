
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    {if isset($title)}
      <title>{$title}</title>
    {else}
      <title>Justin Kibler - Software Engineer by day, Musician by night - Orlando, FL</title>
    {/if} 
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Justin Kibler - Software Engineer by day, Musician by night - Orlando, FL">
    <meta name="author" content="Justin Kibler">

    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
    </style>

    <link rel="stylesheet" href="/scripts/bootstrap/dist/css/bootstrap.css">
    <script src="/scripts/angular/angular.js"></script>

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

    {literal}
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-46624353-1', 'kiblerdude.com');
      ga('send', 'pageview');
    
    </script>
    {/literal}
  </head>

  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">Justin Kibler</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/songs">Songs</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">
      {block name=content} 
      <!-- Main hero unit for a primary marketing message or call to action -->
      <div class="hero-unit">
        <h2><img src="/images/profile2.png" class="img-rounded"/> Justin Kibler</h2>
        <h3>Software Engineer by day, Musician by night.</h3>
        <p>I sing and play cover songs from all genres.  A complete list of the songs I can play is on my <a href="/songs">Songs</a> page.</p>
        <!--
        <p>This site is mostly for my music, but I do have a <a href="/blog">blog</a> focused on software engineering as well as a few <a href="/projects">projects</a> I have worked on as well.</p>
      -->
        <p>
          <a href="https://twitter.com/KiblerDude" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @KiblerDude</a>
          {literal}
          <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
          {/literal}
        </p>
        <p>
          <div class="g-ytsubscribe" data-channelid="UCmYbhUdUZptN5PIykVzzWIg" data-layout="default" data-count="hidden"></div>
        </p>      
      </div>

      <div class="row">
        <h3>Schedule</h3>
        <table class="table table-striped">
            {foreach from=$events item=event}
            <tr>
                <td>{$event->date}</td> 
                <td>{$event->time}</td> 
                <td><a target="_blank" href="{$event->link}">{$event->location}</a></td>                                       
            </tr> 
            {/foreach}          
        </table>
      </div>

      <div class="row">
        <h3>Locations</h3>
        <div class="col-md-6">
          <a target="_blank" href="http://spillwinebar.com/" title="Spill Wine Bar">
            <img class="center-block" src="/images/places/spill-logo.png"/>
          </a>
        </div>
        <div class="col-md-6">
          <a target="_blank" href="http://www.salamandersgrill.com/Salamanders/Home.html" title="Salamanders Grill">
            <img class="center-block" src="/images/places/salamanders.png"/>
          </a>
        </div>        
      </div> 

      <div class="row">
        <h3>Media</h3>
        <div class="col-md-4">
          <p><iframe width="250" height="200" src="//www.youtube.com/embed/J2TmDaQWYl8" frameborder="0" allowfullscreen></iframe></p>
        </div>
        <div class="col-md-4">
          <p><iframe width="250" height="200" src="//www.youtube.com/embed/Vxl_pFqDLFA" frameborder="0" allowfullscreen></iframe></p>
        </div>
        <div class="col-md-4">
          <p><iframe width="250" height="200" src="//www.youtube.com/embed/0xx-ts_BWmA" frameborder="0" allowfullscreen></iframe></p>
        </div>
      </div>

    {/block}
    </div> <!-- /container -->

    <script src="/scripts/jquery/dist/jquery.min.js"></script>
    <script src="/scripts/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="https://apis.google.com/js/platform.js"></script> 

  </body>
</html>
