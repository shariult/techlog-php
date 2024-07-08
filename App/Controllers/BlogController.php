<?php

namespace App\Controllers;

use Framework\Database;
use Framework\Session;
use Framework\Validate;

class BlogController {
  private $db;
  public function __construct() {
    $dbConfig = require basePath("config/dbConfig.php");
    $this->db = new Database($dbConfig);
  }

  private function getCategoryList() {
    // Get Categories //
    $queryCategory = "SELECT * FROM categories ORDER BY category ASC;";
    return $this->db->query($queryCategory)->fetchAll();
  }

  public function getBlogList() {

    $categoryId = phpSanitizer($_GET['categoryId'] ?? '');

    // Get Posts //
    $blogQueryCols = "posts.*, users.userId, users.firstName, users.lastName, categories.categoryId, categories.category";

    $blogQuery = "SELECT {$blogQueryCols} FROM posts";
    $blogQuery .= " LEFT JOIN users ON posts.postAuthorId = users.userId";
    $blogQuery .= " LEFT JOIN categories ON posts.postCategoryId = categories.categoryId";

    if (!empty($categoryId)) {
      $blogQuery .= " WHERE posts.postCategoryId = :categoryId";
      $blogQueryParams = [
        "categoryId" => $categoryId,
      ];
    }

    $blogQuery .= " ORDER BY posts.createdAt DESC LIMIT 10;";
    $posts = $this->db->query($blogQuery, $blogQueryParams ?? [])->fetchAll();

    $categories = $this->getCategoryList();

    loadView("blog/index", [
      "posts"      => $posts,
      "categories" => $categories,
    ]);
  }

  public function getBlogShow($params) {

    // Get Post //
    $postId = $params['postId'];

    $requiredCols = "posts.*, categories.categoryId, categories.category, users.userId, users.firstName, users.lastName";

    $postQuery = "SELECT {$requiredCols} FROM posts";
    $postQuery .= " LEFT JOIN categories ON posts.postCategoryId = categories.categoryId";
    $postQuery .= " LEFT JOIN users ON posts.postAuthorId = users.userId";
    $postQuery .= " WHERE posts.postId = :postId";

    $postQueryParams = [
      "postId" => $postId,
    ];

    $post = $this->db->query($postQuery, $postQueryParams)->fetch();

    // Get Categories //
    $categories = $this->getCategoryList();

    loadView("blog/show", [
      "post"       => $post,
      "categories" => $categories,
    ]);
  }

  public function getBlogCreate() {
    $categories = $this->getCategoryList();

    loadView("blog/create", [
      "categories" => $categories,
    ]);
  }

  public function postBlog() {
    $postImage = imageUploader($_FILES["postImage"], "/img/posts");

    $_POST["postImage"] = $postImage['path'];
    $_POST["postAuthorId"] = Session::get("user")['userId'];

    $allowedInputs = ["postTitle", "postBody", "postImage", "postTags", "postCategoryId", "postAuthorId"];
    $requiredInputs = ["postTitle", "postBody", "postImage", "postCategoryId", "postAuthorId"];

    ["data" => $postInputData, "error" => $error] = validateInputs($_POST, $allowedInputs, $requiredInputs);

    if (!Validate::string($postInputData['postTitle'], 1, 255) && empty($erro['postTitle'])) {
      $error['postTitle'] = "Post Title needs to be withing 1-255 characters";
    }

    if (!Validate::string($postInputData['postTags'], 1, 255) && empty($erro['postTags'])) {
      $error['postTags'] = "Post Title needs to be withing 1-255 characters";
    }

    if (!empty($postImage['error'])) {
      $error['postImage'] = $postImage['error'];
    }

    if (!empty($error)) {
      unlink($postImage['path']);
      $categories = $this->getCategoryList();
      loadView("blog/create", [
        "categories" => $categories,
        "postData"   => $postInputData,
        "error"      => $error,
      ]);
    }

    $postQuery = $this->db->makeInsertQuery("posts", $allowedInputs);
    $result = $this->db->query($postQuery, $postInputData);
    $postId = $this->db->connection->lastInsertId();

    redirect("/blog/{$postId}");

  }

}

?>