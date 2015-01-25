<?php
require_once ("Resource.php");
require_once ("SmartyService.php");
require_once ("Markdown.php");
require_once ("Event.php");

class MainResource implements Resource {

    public function __construct() {
    }

    public function get($parameters, $named) {
        $smarty = new SmartyService();
        
        $template = $parameters["template"];
        
        $year = date("Y");     

        $events = array();
        
        if (($handle = fopen("data/events.csv", "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $event = new Event();
                
                $event->date = $data[0];
                $event->time = $data[1];
                $event->location = $data[2];
                $event->link = $data[3];
                
                array_push($events, $event);
            }
            fclose($handle);
        }
     
        $smarty -> assign("year", $year);
        $smarty -> assign("events", $events);
        $smarty -> display($template);
    }
}
