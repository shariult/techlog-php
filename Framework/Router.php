<?php

namespace Framework;

use App\Controllers\ErrorController;
use Framework\Middlewares\Authorize;

class Router {
  protected $routes = [];

  public function registerRoute($method, $uri, $action, $middleware = []) {
    list($controller, $controllerMethod) = explode('@', $action);

    $this->routes[] = [
      'method'           => $method,
      'uri'              => $uri,
      'controller'       => $controller,
      'controllerMethod' => $controllerMethod,
      'middleware'       => $middleware,
    ];
  }

  public function get($uri, $controller, $middleware = []) {
    $this->registerRoute('GET', $uri, $controller, $middleware);
  }

  public function post($uri, $controller, $middleware = []) {
    $this->registerRoute('POST', $uri, $controller, $middleware);
  }

  public function put($uri, $controller, $middleware = []) {
    $this->registerRoute('PUT', $uri, $controller, $middleware);
  }

  public function delete($uri, $controller, $middleware = []) {
    $this->registerRoute('DELETE', $uri, $controller, $middleware);
  }

  public function route($uri) {
    $requestMethod = $_SERVER['REQUEST_METHOD'];

    // Check for _method input
    if ($requestMethod === 'POST' && isset($_POST['_method'])) {
      // Override the request method with the value of _method
      $requestMethod = strtoupper($_POST['_method']);
    }

    foreach ($this->routes as $route) {

      // Split the current URI into segments
      $uriSegments = explode('/', trim($uri, '/'));

      // Split the route URI into segments
      $routeSegments = explode('/', trim($route['uri'], '/'));

      $match = true;

      // Check if the number of segments matches
      if (count($uriSegments) === count($routeSegments) && strtoupper($route['method'] === $requestMethod)) {
        $params = [];

        $match = true;

        for ($i = 0; $i < count($uriSegments); $i++) {
          // If the uri's do not match and there is no param
          if ($routeSegments[$i] !== $uriSegments[$i] && !preg_match('/\{(.+?)\}/', $routeSegments[$i])) {
            $match = false;
            break;
          }

          // Check for the param and add to $params array
          if (preg_match('/\{(.+?)\}/', $routeSegments[$i], $matches)) {
            $params[$matches[1]] = $uriSegments[$i];
          }
        }

        if ($match) {
          foreach ($route['middleware'] as $middleware) {
            (new Authorize())->handle($middleware);
          }

          $controller = 'App\\Controllers\\' . $route['controller'];
          $controllerMethod = $route['controllerMethod'];

          // Instantiate the controller and call the method
          $controllerInstance = new $controller();
          $controllerInstance->$controllerMethod($params);
          return;
        }
      }
    }
    ErrorController::showPage();
  }
}

?>