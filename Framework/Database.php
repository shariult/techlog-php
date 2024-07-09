<?php

namespace Framework;
use PDO;

class Database {
  public $connection;
  public function __construct($dbConfig) {
    $dbConfig = array_change_key_case($dbConfig, CASE_UPPER);
    $dsn = "mysql:host={$dbConfig['HOST']};port={$dbConfig['PORT']};dbname={$dbConfig['DATABASE']};charset=utf8";
    $options = [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Set PDO to throw exceptions on Error
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Fetch as Associative Array by Default
    ];
    try {
      // Create PDO instance
      $this->connection = new PDO($dsn, $dbConfig['USER'], $dbConfig['PASSWORD'], $options);
    } catch (PDOException $err) {
      // if error, catch
      throw new Exception("Database Connection failed! {$err->getMessage()}");
    }
  }

  public function query($query, $params = []) {
    try {
      $stmt = $this->connection->prepare($query);
      foreach ($params as $key => $value) {
        $stmt->bindValue(":{$key}", $value);
      }
      $stmt->execute($params);
      return $stmt;
    } catch (PDOException $err) {
      // if error, catch
      throw new Exception("Database Query failed! {$err->getMessage()}");
    }
  }

  public function makeInsertQuery($tableName, $allowedInputs, $primaryKey = null) {
    $filteredInputs = array_filter($allowedInputs, fn($str) => $str !== $primaryKey);
    $keys = implode(", ", $filteredInputs);
    $placeholders = implode(", ", array_map(fn($item) => ":{$item}", $filteredInputs));
    return "INSERT INTO {$tableName}({$keys}) VALUES($placeholders)";
  }

  public function makeUpdateQuery($tableName, $allowedInputs, $primaryKey, $where) {
    $updateStr = array_reduce($allowedInputs, function ($acc, $str) {
      if ($str === $primaryKey) {
        return $acc;
      } else if ($acc === "") {
        return "{$str} = :{$str}";
      } else {
        return "{$acc}, {$str} = :{$str}";
      }
    }, "");
    return "UPDATE {$tableName} SET {$updateStr} WHERE $where";
  }
}

?>