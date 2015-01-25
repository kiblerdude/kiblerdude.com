
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

    <!-- Le styles -->
    <link href="/scripts/bootstrap/css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
    </style>
    <link href="/scripts/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/scripts/bootstrap/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/scripts/bootstrap/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/scripts/bootstrap/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="/scripts/bootstrap/ico/apple-touch-icon-57-precomposed.png">
    <link rel="shortcut icon" href="/images/profile.ico">

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

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="/">Justin Kibler</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li><a href="/">Home</a></li>
              <li><a href="/songs">Songs</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">
      {block name=content} 
      <!-- Main hero unit for a primary marketing message or call to action -->
      <div class="hero-unit">
        <h2><img src="/images/profile2.png" class="img-rounded"/> Justin Kibler</h2>
        <h3>Software Engineer by day, Musician by night.</h3>
        <p>I sing and play cover songs from all genres.  A complete list of the songs I can play is on my <a href="/songs">Songs</a> page.</p>
        <p>This site is mostly for my music, but I do have a <a href="/blog">blog</a> focused on software engineering as well as a few <a href="/projects">projects</a> I have worked on as well.</p>
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
        <div class="span4">
          <a target="_blank" href="http://spillwinebar.com/" title="Spill Wine Bar">
            <img src="/images/places/spill-logo.png"/>
          </a>
        </div>
        <div class="span4">
          <a target="_blank" href="http://www.salamandersgrill.com/Salamanders/Home.html" title="Salamanders Grill">
            <img src="/images/places/salamanders.png"/>
          </a>
        </div>        
      </div> 

      <div class="row">
        <h3>Media</h3>
        <div class="span4">
          <p><iframe width="250" height="200" src="//www.youtube.com/embed/J2TmDaQWYl8" frameborder="0" allowfullscreen></iframe></p>
        </div>
        <div class="span4">
          <p><iframe width="250" height="200" src="//www.youtube.com/embed/Vxl_pFqDLFA" frameborder="0" allowfullscreen></iframe></p>
        </div>
        <div class="span4">
          <p><iframe width="250" height="200" src="//www.youtube.com/embed/0xx-ts_BWmA" frameborder="0" allowfullscreen></iframe></p>
        </div>
      </div>

    {/block}
    </div> <!-- /container -->

    <script type="text/javascript" src="/scripts/jquery-1.9.1.min.js"></script>
    <script src="/scripts/bootstrap/js/bootstrap.js"></script>
    <script src="https://apis.google.com/js/platform.js"></script> 

  </body>
</html>
