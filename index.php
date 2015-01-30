<?php
session_start();
session_regenerate_id();

set_include_path(
  get_include_path() . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/lib/smarty" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/lib/spyc-0.5" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/lib/markdown" . PATH_SEPARATOR .  
  $_SERVER['DOCUMENT_ROOT']."/src/core" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/src/models" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/src/service" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/src/resources");


// whenever i upload this file to the server, i have to comment the above and uncomment the below.
// TODO:  i should fix this in my local dev environment so it matches what godaddy is doing.

set_include_path(
  get_include_path() . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/kiblerdude/lib/smarty" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/kiblerdude/lib/spyc-0.5" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/kiblerdude/lib/markdown" . PATH_SEPARATOR .  
  $_SERVER['DOCUMENT_ROOT']."/kiblerdude/src/core" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/kiblerdude/src/models" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/kiblerdude/src/service" . PATH_SEPARATOR .
  $_SERVER['DOCUMENT_ROOT']."/kiblerdude/src/resources");

require_once("Core.php");

$uri = $_SERVER['REQUEST_URI'];
$query = $_SERVER['QUERY_STRING'];
$named = array();

if (strpos($uri, "?"))
{
  $uri = substr($uri, 0, strpos($uri, "?"));
}

try {
  // special checks for blog endpoints
  if (substr( $uri, 0, 5 ) === "/blog") {
    $blog = substr($uri, 5);
    $named["blog"] = $blog;
    $uri = "/blog";
  }
  
  Core::process($uri, $named);

} catch (Exception $e) {
    error_log($e);
    Core::process("/",$named);
}
?>
