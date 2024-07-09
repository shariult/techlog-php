<?php

// Inspect Functions //

function inspect($data) {
  echo "<pre>";
  var_dump($data);
  echo "</pre>";
}

function inspectAndExit($data) {
  echo "<pre>";
  var_dump($data);
  echo "</pre>";
  die();
}

// Helper Functions //

function basePath($path = "") {
  return __DIR__ . "/" . $path;
}

function loadView($viewFile, $data = []) {
  $filePath = basePath("App/Views/{$viewFile}.view.php");
  if (file_exists($filePath)) {
    extract($data);
    require $filePath;
  } else {
    echo "File {$viewFile} does not exist.";
  }
}

function loadPartial($partialFile, $data = []) {
  $filePath = basePath("App/Views/partials/{$partialFile}.php");
  if (file_exists($filePath)) {
    extract($data);
    require $filePath;
  } else {
    echo "File {$partialFile} does not exist.";
  }
}

function redirect($url) {
  header("Location: {$url}");
  exit;
}

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

function validateInputs($data, $allowedInputs, $requiredInputs) {
  $error = [];
  $cleanData = [];

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

function outFormError($error, $searchFor) {
  if ($error && !empty($error[$searchFor])) {
    echo "<p class='text-danger'>{$error[$searchFor]}<p>";
  }
}

function imageUploader($fileToUpload, $uploadDir = "img") {
  $fileData = [
    "path"  => null,
    "error" => null,
  ];

  $pos = strpos($uploadDir, "/");
  if ($pos === 0) {
    $uploadDir = substr_replace($uploadDir, "", $pos, strlen("/"));
  }

  if ($fileToUpload["error"] === UPLOAD_ERR_OK) {

    // Check and Create dir
    if (!is_dir($uploadDir)) {
      mkdir($uploadDir, 0755, true);
    }

    // Create Unique file name
    $filename = uniqid() . "-" . $fileToUpload["name"];

    // Check file type
    $allowedExtensions = ["jpg", "jpeg", "png"];
    $fileExtension = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
    if (!in_array($fileExtension, $allowedExtensions)) {
      $fileData["error"] = "Extension not allowed!";
      return $fileData;
    }

    // Check file size
    if ((int) $fileToUpload['size'] > 307200) {
      $fileData["error"] = "File size should be within 1-300 KB";
      return $fileData;
    }

    // Upload file
    if (move_uploaded_file($fileToUpload["tmp_name"], "{$uploadDir}/{$filename}")) {
      $fileData['path'] = "/{$uploadDir}/$filename";
      return $fileData;
    } else {
      $fileData["error"] = "File upload Error: {$fileToUpload["error"]}";
      return $fileData;
    }
  }
  return $fileData;
}

?>