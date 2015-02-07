<?php
require_once ("Resource.php");
require_once ("SmartyService.php");
require_once ("Blog.php");

use \Michelf\Markdown;

class BlogResource implements Resource {

    public function __construct() {
    }

    public function get($parameters, $named) {
        $smarty = new SmartyService();
        
        $template = $parameters["template"];
        $blogLink = $named["blog"];
        $blog = new Blog();
        $blogs = array();

        if (!empty($blogLink)) {
            $blogLink = substr( $blogLink, 1);
        }
        
        if (($handle = fopen("data/blogs.csv", "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $b = new Blog();
                $b->title = $data[0];
                $b->file = $data[1];
                $b->date = $data[2];
                $b->link = $data[3];

                array_push($blogs, $b);

                if (empty($blogLink)) {
                    $blog = $b;
                    $blogLink = $b->link;
                } else if (strcmp($blogLink, $b->link) === 0) {
                    $blog = $b;
                }
            }
            fclose($handle);
        }
        
        $text = file_get_contents('data/blogs/' . $blog->file);
        $markdown = Markdown::defaultTransform($text);
    
        $smarty -> assign("blogs", $blogs);
        $smarty -> assign("title", $blog->title);
        $smarty -> assign("blogLink", $blogLink);
        $smarty -> assign("markdown", $markdown);
        $smarty -> display($template);
    }
}
