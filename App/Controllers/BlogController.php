<?php

namespace App\Controllers;

use Framework\Database;

class BlogController {
  private $db;
  function __construct() {
    $dbConfig = require basePath("config/dbConfig.php");
    $this->db = new Database($dbConfig);
  }

  function getCategoryList() {
// Get Categories //
    $queryCategory = "SELECT * FROM categories ORDER BY category ASC;";
    return $this->db->query($queryCategory)->fetchAll();
  }

  function getBlogList() {

    $categoryId = phpSanitizer($_GET['categoryId'] ?? '');

    // Get Posts //
    $requiredFields = "posts.*, users.userId, users.firstName, users.lastName, categories.categoryId, categories.category";

    $query = "SELECT {$requiredFields} FROM posts";
    $query = "{$query} LEFT JOIN users ON posts.postAuthorId = users.userId";
    $query = "{$query} LEFT JOIN categories ON posts.postCategoryId = categories.categoryId";

    if (!empty($categoryId)) {
      $query = "{$query} WHERE posts.postCategoryId = :categoryId";
      $queryParams = [
        "categoryId" => $categoryId,
      ];
    }

    $query = "{$query} ORDER BY posts.createdAt DESC LIMIT 10;";
    $posts = $this->db->query($query, $queryParams ?? [])->fetchAll();

    $categories = $this->getCategoryList();

    loadView("blog/index", [
      "posts"      => $posts,
      "categories" => $categories,
    ]);
  }

  function getBlogShow($params) {

    // Get Post //
    $postId = $params['postId'];

    $requiredFields = "posts.*, categories.categoryId, categories.category, users.userId, users.firstName, users.lastName";

    $postQuery = "SELECT {$requiredFields} FROM posts";
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

  function getBlogCreate() {
    loadView("blog/create");
  }

}

?>