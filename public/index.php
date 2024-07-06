<?php

if ($_SERVER["HTTP_HOST"] === "localhost" || $_SERVER["HTTP_HOST"] === "localhost:8000") {
  ini_set("display_errors", 1);
  error_reporting(E_ALL);
}

session_start();

require __DIR__ . "/../vendor/autoload.php";
require "../functions.php";

use Framework\Router;

// Instantiate Router
$router = new Router();

// Setup Routes
$routes = require basePath("routes.php");

// Request //

// GET URI and HTTP Method from Request
$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

// Route the Request
$router->route($uri);

?>