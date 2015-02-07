<?php
//require_once("Spyc.php");
class Core {
   
    public static function process($uri, $named) {
        $yaml = Spyc::YAMLLoad("config.yml");
        $data = $yaml["resources"];
        
        $resourceConfig = self::getResourceConfig($data, $uri);
        
        if ($resourceConfig != null) {
            self::processResource($resourceConfig["name"], $resourceConfig["parameters"], $named);
        } else {
            throw new Exception("No resource for URI " . $uri);
        }
    }
    
    private static function processResource($name, $parameters, $named) {
        require_once($name.".php");
        $class = new ReflectionClass($name);
        $method = $class->getMethod('get');
        $method->invoke($class->newInstance(), $parameters, $named);
    }
    
    /**
     * Returns the configuration of the resource for the provided URI
     */
    private static function getResourceConfig($data, $uri) {
        $totalResources = count($data);
        $config = null;
        
        for ( $i = 0; $i < $totalResources; $i++ ) {
            $resource = $data[$i];
            if ($uri == $resource["uri"]) {
                $config = $resource;
                $i = $totalResources;
            }
        }   
        
        return $config;
    }
}
