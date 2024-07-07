<?php

namespace App\Controllers;

use App\Controllers\ErrorController;
use Framework\Database;
use Framework\Session;
use Framework\Validate;

class IndexController {

  protected $db;
  public function __construct() {
    $dbConfig = require basePath("config/dbConfig.php");
    $this->db = new Database($dbConfig);
  }

  public function getIndex() {

    // Get Posts //
    $postQueryCols = "posts.*, users.userId, users.firstName, users.lastName, categories.categoryId, categories.category";

    $postQuery = "SELECT {$postQueryCols} FROM posts";
    $postQuery = "{$postQuery} LEFT JOIN users ON posts.postAuthorId = users.userId";
    $postQuery = "{$postQuery} LEFT JOIN categories ON posts.postCategoryId = categories.categoryId";
    $postQuery = "{$postQuery} ORDER BY posts.createdAt DESC LIMIT 6;";
    $posts = $this->db->query($postQuery)->fetchAll();

    // Get Categories //
    $categoryQuery = "SELECT * FROM categories ORDER BY category ASC;";
    $categories = $this->db->query($categoryQuery)->fetchAll();

    loadView("index", [
      "posts"      => $posts,
      "categories" => $categories,
    ]);
  }

  public function getLogin() {
    loadView("login");
  }

  public function getRegister() {
    loadView("register");
  }

  public function postRegister() {

    $profileImage = fileUploader($_FILES['profileImage'], "img/users");
    $_POST['profileImage'] = $profileImage['path'] ?? "/img/users/default.svg";

    $allowedInputs = ["firstName", "lastName", "username", "password", "email", "profileImage", "birthDate", "country", "profession", "about"];
    $requiredInputs = ["firstName", "lastName", "username", "password", "email"];

    ["data" => $userData, "error" => $error] = validateInputs($_POST, $allowedInputs, $requiredInputs);

    if (!Validate::string($userData['username'], 1, 20) && empty($error['username'])) {
      $error['username'] = "Username must be within 1-20 characters";
    }

    if (!Validate::string($userData['firstName'], 1, 50) && empty($error['firstName'])) {
      $error['firstName'] = "First Name must be within 1-50 characters";
    }

    if (!Validate::string($userData['lastName'], 1, 50) && empty($error['lastName'])) {
      $error['lastName'] = "Last Name must be within 1-50 characters";
    }

    if (!Validate::string($userData['password'], 6, 20) && empty($error['password'])) {
      $error['password'] = "Password must be within 6-20 characters";
    }

    if (!Validate::isUnique("users", "username", $userData['username']) && empty($error['username'])) {
      $error['username'] = "Username already exists";
    }

    if (!Validate::isUnique("users", "email", $userData['email']) && empty($error['email'])) {
      $error['email'] = "Username already exists";
    }

    if (!empty($profileImage['error'])) {
      $error['profileImage'] = $profileImage['error'];
    }

    if (!empty($error)) {

      if ($userData['profileImage'] !== "/img/users/default.svg") {
        unlink($userData['profileImage']);
      }

      loadView("register", [
        "userData" => $userData,
        "error"    => $error,
      ]);
      exit;
    }

    $userData['password'] = password_hash($userData['password'], PASSWORD_DEFAULT);

    $userQuery = $this->db->makeInsertQuery("users", $allowedInputs);

    $isSuccessful = $this->db->query($userQuery, $userData);
    $userId = $this->db->connection->lastInsertId();

    if (!empty($isSuccessful)) {
      $userData['userId'] = $userId;
      unset($userData['password']);
      Session::set("user", $userData);
      redirect("/");
    } else {
      ErrorController::showPage("Registration Failed!", 401);
    }

  }

  public function postLogin() {

    $allowedInputs = ["email", "password"];
    $requiredInputs = ["email", "password"];

    ["data" => $userInputData, "error" => $error] = validateInputs($_POST, $allowedInputs, $requiredInputs);

    $userQuery = "SELECT * FROM users WHERE users.email = :email";
    $userQueryParams = [
      "email" => $userInputData['email'],
    ];
    $userData = $this->db->query($userQuery, $userQueryParams)->fetch();

    if (empty($userData) || !password_verify($userInputData['password'], $userData['password'])) {
      $error = [
        "email"    => "Invalid credentials!",
        "password" => "Invalid credentials!",
      ];
      loadView("login", [
        "error" => $error,
      ]);
    }

    unset($userData['password']);
    Session::set("user", $userData);
    redirect('/');

  }

  public function getLogout() {
    Session::clearAll();
    $params = session_get_cookie_params();
    setcookie('PHPSESSID', '', time() - 86400, $params['path'], $params['domain']);
    redirect("/");
  }

}

?>