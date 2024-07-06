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
  return filter_var(trim($data ?? ''), FILTER_SANITIZE_SPECIAL_CHARS);
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
    $cleanData[$key] = !empty($value) ? phpSanitizer($value) : NULL;
  }

  // Set Error if Required field is empty
  foreach ($requiredInputs as $requiredInput) {
    if (empty($cleanData[$requiredInput])) {
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

?>