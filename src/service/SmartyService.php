<?php
require_once("Service.php");
require_once("Smarty.class.php");

class SmartyService implements Service {
    
    private $smarty;
    
    public function __construct() {
        $this->smarty = new Smarty();
        $this->smarty->template_dir = "./data/templates/";
        $this->smarty->compile_dir  = "./compile";
        $this->smarty->config_dir   = "./config";
        $this->smarty->cache_dir    = "./cache";    
        //$smarty->debugging = true;
    }
    
    public function assign($key, $value) {
        $this->smarty->assign($key, $value);
    }
    
    public function display($template) {
        $this->smarty->display($template);
    }
    
    public function fetch($template) {
        return $this->smarty -> fetch($template);
    }
}