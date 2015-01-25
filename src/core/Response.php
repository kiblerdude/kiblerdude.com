<?php

class Response
{
  // Boolean indicating if the request was successful.
  //
  public $success = true;
  
  // String message if the request was successful.
  //
  public $message = "";
  
  // String error message if the request was unsuccessful.
  //
  public $error = "";
  
  // String HTML if the request returns HTML content.
  //
  public $html = "";
  
  public function setSuccess($success) {
      $this->success = $success;
  }
  
  public function setMessage($message) {
      $this->message = $message;
  }
  
  public function setError($error) {
      $this->error = $error;
  }
  
  public function setHtml($html) {
      $this->html = $html;
  }
}
