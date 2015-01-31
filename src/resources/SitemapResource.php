<?php
require_once ("Resource.php");
require_once ("SmartyService.php");
require_once ("Markdown.php");
require_once ("Blog.php");

class SitemapResource implements Resource {

    public function __construct() {
    }

    public function get($parameters, $named) {
        $smarty = new SmartyService();
        
        $template = $parameters["template"];  

        $blogLinks = array();

        if (($handle = fopen("data/blogs.csv", "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {

                array_push($blogLinks, $data[3]);
            }
            fclose($handle);
        }
     
        $smarty -> assign("blogLinks", $blogLinks);
        $smarty -> display($template);
    }
}
