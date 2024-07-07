<?php

namespace App\Controllers;

use Framework\Database;

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
    $blogQuery = "{$blogQuery} LEFT JOIN users ON posts.postAuthorId = users.userId";
    $blogQuery = "{$blogQuery} LEFT JOIN categories ON posts.postCategoryId = categories.categoryId";

    if (!empty($categoryId)) {
      $blogQuery = "{$blogQuery} WHERE posts.postCategoryId = :categoryId";
      $blogQueryParams = [
        "categoryId" => $categoryId,
      ];
    }

    $query = "{$blogQuery} ORDER BY posts.createdAt DESC LIMIT 10;";
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
    $postQuery = "{$postQuery} LEFT JOIN categories ON posts.postCategoryId = categories.categoryId";
    $postQuery = "{$postQuery} LEFT JOIN users ON posts.postAuthorId = users.userId";
    $postQuery = "{$postQuery} WHERE posts.postId = :postId";

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

  public function postBlog() {}

}

?>