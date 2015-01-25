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
        $genres = array();
        $totalSongs = 0;
        
        if (($handle = fopen("data/songs.csv", "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $song = new Song();
                $num = count($data);
                
                $song->genre = $data[0];
                $song->artist = $data[1];
                $song->song = $data[2];
                
                $totalSongs++;
                
                // check if the genre is already mapped
                if (array_key_exists($song->genre, $genres)) {
                    // add the song to the genre
                    array_push($genres[$song->genre], $song);
                } else {
                    // create the song array for the genre
                    $arr = array();
                    array_push($arr, $song);
                    $genres[$song->genre] = $arr;
                }
 
            }
            fclose($handle);
        }       
        
        $year = date("Y");
   
        $smarty -> assign("year", $year);
        $smarty -> assign("genres", $genres);
        $smarty -> assign("totalSongs", $totalSongs);
        $smarty -> display($template);
    }
}
