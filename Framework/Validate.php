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

  public static function formInputs($data, $allowedInputs, $requiredInputs) {
    $error = [];
    $cleanData = [];

    function phpSanitizer($str) {
      if (isset($str) && strlen($str) > 0) {
        return filter_var(trim($str), FILTER_SANITIZE_SPECIAL_CHARS);
      }
      return null;
    }

    function splitCamelCase($str) {
      preg_match_all('/((?:^|[A-Z])[a-z]+)/', $str, $matches);
      $newStr = array_reduce($matches[1], function ($acc, $val) {
        return ucfirst($acc) . " " . ucfirst($val);
      }, "");
      return trim($newStr);
    }

    // Use only Allowed Inputs
    $data = array_intersect_key($data, array_flip($allowedInputs));

    // Trim and set empty value to null
    foreach ($data as $key => $value) {
      $cleanData[$key] = phpSanitizer($value);
    }

    // Set Error if Required field is empty
    foreach ($requiredInputs as $requiredInput) {
      if (!isset($cleanData[$requiredInput])) {
        $nameStr = splitCamelCase($requiredInput);
        $error[$requiredInput] = "{$nameStr} is required";
      }
    }

    return [
      "error" => $error,
      "data"  => $cleanData,
    ];
  }
}

?>