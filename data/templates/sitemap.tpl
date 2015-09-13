<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url> 
    <loc>http://www.kiblerdude.com/</loc> 
  </url>
  <url> 
    <loc>http://www.kiblerdude.com/songs</loc> 
  </url>  
  <url> 
    <loc>http://www.kiblerdude.com/projects</loc> 
  </url>
  <url> 
    <loc>http://www.kiblerdude.com/blog</loc> 
  </url>
{foreach from=$blogLinks item=link}
  <url> 
    <loc>http://www.kiblerdude.com/blog/{$link}</loc> 
  </url>
{/foreach}      
</urlset>