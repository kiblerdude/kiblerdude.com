<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="description" CONTENT="Oregon Trail Death as a Service"> 

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

    <noscript>WARNING: This website requires Javascript to be enabled for some functionality!</noscript>
  
    <title>{$title}</title>

</head>
<body>
    <style>
        html {
            background: #000000;
            background-image: url("../images/{$image}");
            background-repeat: no-repeat;
            background-position: top center;
            color: #ffffff;
            font-size: 34px;
            font-family: "Courier New", Courier, monospace;
            font-weight: bold;            
        }
        #oregon_trail_death {
            position: relative;
            width: 600px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 320px;
            text-align: center;
        }
        #oregon_trail_disease {
            position: relative;
            width: 600px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 242px;
            text-align: center;
        }        
    </style>
    {if $type == "death"}
    <div id="oregon_trail_death">
    {$name} has died of {$disease}
    </div>
    {else}
    <div id="oregon_trail_disease">
    {$name} has {$disease}
    {/if}
    </div>    
</body>
</html>