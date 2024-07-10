<?php

namespace App\Controllers;

use App\Controllers\ErrorController;
use Framework\Database;
use Framework\Session;
use Framework\Validate;

class ReviewController {
  private $db;
  public function __construct() {
    $dbConfig = require basePath("config/dbConfig.php");
    $this->db = new Database($dbConfig);
  }

  public function postReview($params) {
    $_POST['authorImage'] = Session::get("user")['profileImage'];
    $_POST['authorName'] = Session::get("user")['firstName'] . " " . Session::get("user")['lastName'];
    $_POST['reviewPostId'] = $params['postId'];
    $_POST['reviewAuthorId'] = Session::get("user")['userId'];

    $allowedInputs = ["reviewId", "review", "authorName", "authorImage", "reviewAuthorId", "reviewPostId"];
    $requiredInputs = ["review", "authorName", "authorImage", "reviewAuthorId", "reviewPostId"];

    ["data" => $reviewInputData, "error" => $error] = Validate::formInputs($_POST, $allowedInputs, $requiredInputs);

    if (!Validate::string($reviewInputData['review'], 6) && empty($error['review'])) {
      $error['review'] = "Review is too short";
    }

    if (!empty($error)) {
      ErrorController::showPage("Review too Short!", 400);
    }

    $reviewInsertQuery = $this->db->makeInsertQuery("reviews", $allowedInputs, "reviewId");
    $isSuccess = $this->db->query($reviewInsertQuery, $reviewInputData)->fetch();
    redirect("/blog/{$params['postId']}");
  }
}

?>