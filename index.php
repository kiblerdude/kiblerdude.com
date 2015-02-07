<?php
session_start();
session_regenerate_id();

set_include_path(
  get_include_path() . PATH_SEPARATOR .
  "src/core" . PATH_SEPARATOR .
  "src/models" . PATH_SEPARATOR .
  "src/service" . PATH_SEPARATOR .
  "src/resources");

require 'vendor/autoload.php';
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
