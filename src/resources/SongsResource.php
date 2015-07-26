<?php
require_once ("Resource.php");
require_once ("SmartyService.php");
require_once ("Song.php");

class SongsResource implements Resource {

    public function __construct() {
    }

    public function get($parameters, $named) {
        $smarty = new SmartyService();
        
        $template = $parameters["template"];     
        
        $year = date("Y");
   
        $smarty -> assign("year", $year);
        $smarty -> display($template);
    }
}
