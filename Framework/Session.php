<?php

namespace Framework;

class Session {
  public static function set($key, $data) {
    $_SESSION[$key] = $data;
  }
  public static function get($key) {
    if (isset($_SESSION[$key])) {
      return $_SESSION[$key];
    }
  }
  public static function unset($key) {
    unset($_SESSION[$key]);
  }
  public static function clearAll() {
    session_unset();
    session_destroy();
  }
}

?>