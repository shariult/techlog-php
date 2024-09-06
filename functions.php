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

function phpSanitizer($data) {
  if (isset($data) && is_string($data) && strlen($data) > 0) {
    return filter_var(trim($data), FILTER_SANITIZE_SPECIAL_CHARS);
  } else if (isset($data) && is_numeric($data)) {
    $sanitized = filter_var($data, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    return (strpos($sanitized, '.') !== false) ? (float) $sanitized : (int) $sanitized;
  } else if (isset($data) && is_bool($data)) {
    return $data;
  } else if (isset($data) && is_array($data)) {
    return array_map('phpSanitizer', $data);
  } else {
    return null;
  }
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
  $sanitizedArr = [];

  // Use only allowed Inputs
  $data = array_intersect_key($data, array_flip($allowedInputs));

  // Sanitize inputs
  $sanitizedArr = phpSanitizer($data);

  // Set Error if required fields are empty
  foreach ($requiredInputs as $requiredInput) {
    if (!isset($sanitizedArr[$requiredInput])) {
      $nameStr = splitCamelCase($requiredInput);
      $error[$requiredInput] = "{$nameStr} is required";
    }
  }

  return [
    "error" => $error,
    "data"  => $sanitizedArr,
  ];
}

function outFormError($error, $searchFor) {
  if ($error && !empty($error[$searchFor])) {
    echo "<p class='text-danger'>{$error[$searchFor]}<p>";
  }
}

function mediaUploader($fileToUpload, $uploadDir = "img/posts") {
  $fileData = [
    "filename" => null,
    "checksum" => null,
    "path"     => null,
    "error"    => null,
  ];

  // Create Unique file name
  $fileData['filename'] = uniqid() . "_" . $fileToUpload["name"];
  $fileData['filename'] = preg_replace('/[^a-zA-Z0-9_\-\.]/', '_', $fileData["filename"]);
  $fileData["path"] = "{$uploadDir}/{$fileData['filename']}";

  if ($fileToUpload["error"] === UPLOAD_ERR_OK) {
    // Check and Create dir
    if (!is_dir($uploadDir)) {
      mkdir($uploadDir, 0755, true);
    }

    // Check file type
    $allowedExtensions = ["jpg", "jpeg", "png"];
    $fileExtension = strtolower(pathinfo($fileData['filename'], PATHINFO_EXTENSION));
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
    if (move_uploaded_file($fileToUpload["tmp_name"], $fileData["path"])) {
      $fileData['checksum'] = sha1_file($fileData["path"]);
    } else {
      $fileData["error"] = "File upload Error: {$fileToUpload["error"]}";
    }
  }
  return $fileData;
}

?>