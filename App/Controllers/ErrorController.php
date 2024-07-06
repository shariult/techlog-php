<?php

namespace App\Controllers;

class ErrorController {
  public static function showPage($message = "Something went wrong!", $statusCode = 500) {
    http_response_code($statusCode);
    loadView("error", [
      "message"    => $message,
      "statusCode" => $statusCode,
    ]);
  }
}

?>