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
    // Pagination
    $pageNum = phpSanitizer($_GET['page'] ?? 1);
    $setQueryLimit = $pageNum > 1 ? (int) ($pageNum - 1) * 10 . ', 10' : "10";
    $totalPosts = $this->db->query("SELECT COUNT(postId) as count FROM posts")->fetch()['count'];
    $totalPages = ceil($totalPosts / 10);

    // Get Posts
    $categoryId = phpSanitizer($_GET['categoryId'] ?? '');

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

    $blogQuery .= " ORDER BY posts.createdAt DESC LIMIT {$setQueryLimit};";
    $posts = $this->db->query($blogQuery, $blogQueryParams ?? [])->fetchAll();

    $categories = $this->getCategoryList();

    loadView("blog/index", [
      "posts"      => $posts,
      "categories" => $categories,
      "totalPages" => $totalPages,
      "pageNum"    => $pageNum,
    ]);
  }

  public function getBlogShow($params) {
    $postId = $params['postId'];

    // Get post
    $requiredCols = "posts.*, categories.categoryId, categories.category, users.userId, users.firstName, users.lastName";

    $postQuery = "SELECT {$requiredCols} FROM posts";
    $postQuery .= " LEFT JOIN categories ON posts.postCategoryId = categories.categoryId";
    $postQuery .= " LEFT JOIN users ON posts.postAuthorId = users.userId";
    $postQuery .= " WHERE posts.postId = :postId";

    $postQueryParams = [
      "postId" => $postId,
    ];

    $post = $this->db->query($postQuery, $postQueryParams)->fetch();

    // Get categories
    $categories = $this->getCategoryList();

    // Get Reviews
    $reviewsQuery = "SELECT * FROM reviews";
    $reviewsQuery .= " WHERE reviewPostId = '{$postId}'";
    $reviewsQuery .= " ORDER BY createdAt DESC";
    $reviewArr = $this->db->query($reviewsQuery)->fetchAll();

    // Load view
    loadView("blog/show", [
      "post"       => $post,
      "categories" => $categories,
      "reviewArr"  => $reviewArr,
    ]);
  }

  public function getBlogCreate() {
    $categories = $this->getCategoryList();

    loadView("blog/create", [
      "categories" => $categories,
    ]);
  }

  public function postBlog() {
    // Upload image
    $postImage = mediaUploader($_FILES["postImage"], "img/posts");

    // Setting necessary field
    $_POST["postImage"] = $postImage['filename'];
    $_POST["postAuthorId"] = Session::get("user")['userId'];

    // Form validation
    $allowedInputs = ["postId", "postTitle", "postBody", "postImage", "postTags", "postCategoryId", "postAuthorId"];
    $requiredInputs = ["postTitle", "postBody", "postImage", "postCategoryId", "postAuthorId"];

    ["data" => $postInputData, "error" => $error] = validateInputs($_POST, $allowedInputs, $requiredInputs);

    if (!Validate::string($postInputData['postTitle'], 1, 255) && empty($error['postTitle'])) {
      $error['postTitle'] = "Post Title needs to be withing 1-255 characters";
    }

    if (!Validate::string($postInputData['postTags'], 1, 255) && empty($error['postTags'])) {
      $error['postTags'] = "Post Title needs to be withing 1-255 characters";
    }

    if (!empty($postImage['error'])) {
      $error['postImage'] = $postImage['error'];
    }

    // Error handler
    if (!empty($error)) {
      if (isset($postImage['path'])) {
        unlink($postImage['path']);
      }

      $categories = $this->getCategoryList();
      loadView("blog/create", [
        "categories"    => $categories,
        "postInputData" => $postInputData,
        "error"         => $error,
      ]);
      exit;
    }

    // Post Query
    $postQuery = $this->db->makeInsertQuery("posts", $allowedInputs, "postId");
    $result = $this->db->query($postQuery, $postInputData);
    $postId = $this->db->connection->lastInsertId();

    // Redirect
    redirect("/blog/{$postId}");

  }

  public function getBlogEdit($params) {
    // Get categories
    $categories = $this->getCategoryList();

    // GET Post Data
    $postQuery = "SELECT * FROM posts WHERE postId = :postId";
    $postQueryParams = [
      "postId" => $params['postId'],
    ];

    $postData = $this->db->query($postQuery, $postQueryParams)->fetch();

    // Load View
    loadView("blog/edit", [
      "categories"    => $categories,
      "postInputData" => $postData,
    ]);
  }

  public function putBlog($params) {
    $postId = $params['postId'];

    // GET old post Data
    $postQuery = "SELECT postImage, postAuthorId FROM posts WHERE postId = :postId";
    $postQueryParams = [
      "postId" => $postId,
    ];
    $postData = $this->db->query($postQuery, $postQueryParams)->fetch();

    // Set necessary field
    if (empty($_FILES['postImage']['name'])) {
      $postImage['filename'] = $postData['postImage'];
    } else {
      $postImage = mediaUploader($_FILES["postImage"], "img/posts");
    }
    $_POST['postId'] = $postId;
    $_POST['postImage'] = $postImage['filename'];

    // Form validation
    $allowedInputs = ["postId", "postTitle", "postBody", "postImage", "postTags", "postCategoryId"];
    $requiredInputs = ["postTitle", "postBody", "postImage", "postCategoryId"];

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

    // Error handler
    if (!empty($error)) {

      $categories = $this->getCategoryList();
      loadView("blog/edit", [
        "categories"    => $categories,
        "postInputData" => $postInputData,
        "error"         => $error,
      ]);
      exit;
    }

    // Update Query
    $postUpdateQuery = $this->db->makeUpdateQuery("posts", $allowedInputs, "postId", "postId = :postId");
    $isSuccessful = $this->db->query($postUpdateQuery, $postInputData);
    // Redirect
    redirect("/blog/{$postId}");
  }

}

?>