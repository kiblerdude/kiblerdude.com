<?php
require_once ("Resource.php");
require_once ("SmartyService.php");

class OregonTrailResource implements Resource {

    public function __construct() {
    }

    public function get($parameters, $named) {
        $smarty = new SmartyService();
        
        $template = $parameters["template"];
        $image = $parameters["image"];
        $title = $parameters["title"];
        $type = $parameters["type"];

        $name = "(name)";
        $disease = "(disease)";
        
        if(isset($_GET['name'])) {
            $name = $_GET['name'];
        }
            
        if(isset($_GET['disease'])) {
            $disease = $_GET['disease'];
        }               
       
        $smarty -> assign("type", $type);
        $smarty -> assign("title", $title);
        $smarty -> assign("image", $image);
        $smarty -> assign("name", $name);
        $smarty -> assign("disease", $disease);
        $smarty -> display($template);
    }
}
