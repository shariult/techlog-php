<?php loadPartial("head");?>
<?php loadPartial("navbar");?>

<main class="main">
  <div class="container my-5 py-5 text-center">
    <img src="img/error.9eccec1a.svg" alt="error" class="img-fluid my-5 w-25" />
    <p class="display-1"><?=$statusCode ?? 500?></p>
    <p class="text-muted"><?=$message ?? "Something went wrong!"?></p>
    <a href="/" class="btn btn-lg btn-primary text-light">Back to Homepage</a>
  </div>
</main>

<?php loadPartial("footer");?>
<?php loadPartial("end");?>