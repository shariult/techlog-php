<?php use Framework\Session;?>

<nav class="bg-body-tertiary navbar navbar-expand-lg sticky-top">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="/img/logo.3a251448.png" alt="logo of tech log" width="48" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="mb-2 mb-lg-0 me-auto navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog/create">Create Post</a>
        </li>
      </ul>

      <?php if (empty(Session::get("user"))): ?>
      <a href="/register" class="btn btn-primary me-2 text-light">Register</a>
      <a href="/login" class="btn btn-primary text-light">Login</a>
      <?php else: ?>
      <p class="mt-3 me-3">Logged In as <a href="#"><?=Session::get("user")['firstName']?></a></p>
      <a href="/logout" class="btn btn-primary text-light">Logout</a>
      <?php endif;?>

    </div>
  </div>
</nav>