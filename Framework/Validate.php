<?php

namespace Framework;

use Framework\Database;

class Validate {

  public static function connectDB() {
    $dbConfig = require basePath("config/dbConfig.php");
    return new Database($dbConfig);
  }

  public static function string($value, $min = 1, $max = INF) {
    if (is_string($value)) {
      $value = trim($value);
      $length = strlen($value);
      return $length >= $min && $length <= $max;
    }
    return false;
  }

  public static function email($value) {
    $value = trim($value);
    return filter_var($value, FILTER_VALIDATE_EMAIL);
  }

  public static function match($value1, $value2) {
    $value1 = trim($value1);
    $value2 = trim($value2);
    return $value1 === $value2;
  }

  public static function isUnique($tableName, $tableKey, $keyValue) {
    $db = self::connectDB();
    $query = "SELECT {$tableKey} FROM {$tableName} WHERE {$tableKey} = '{$keyValue}'";
    $data = $db->query($query)->fetch();
    if (empty($data)) {
      return true;
    }
    return false;
  }
}

?>