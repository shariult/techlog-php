<?php loadPartial("head");?>
<?php loadPartial("navbar");?>

<main class="form-signin m-auto my-5 py-5 w-100">
  <form method="post" action="/login" class="needs-validation px-4" novalidate>
    <img class="mb-4" src="img/logo.3a251448.png" alt width="72" />
    <h1 class="fw-normal h3 mb-3">Please sign in</h1>
    <div class="form-floating">
      <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com"
        value="<?=$userData['email'] ?? ''?>" required />
      <label for="email">Email address</label>
      <div class="invalid-feedback pb-2">Email Cannot be empty</div>
      <br /> <?=outFormError($error ?? null, "email")?>
    </div>
    <div class="form-floating">
      <input type="password" name="password" class="form-control" id="password" placeholder="Password" required />
      <label for="password">Password</label>
      <div class="invalid-feedback pb-2">Password Cannot be empty</div>
      <br /><?=outFormError($error ?? null, "password")?>
    </div>
    <!-- <div class="form-check my-3 text-start">
      <input type="checkbox" name="rememberMe" class="form-check-input" value="rememberMe" id="rememberMe" />
      <label class="form-check-label" for="rememberMe"> Remember me </label>
    </div> -->
    <button class="btn btn-primary py-2 text-light w-100" type="submit">
      Sign in
    </button>
    <p class="mb-3 mt-5 text-body-secondary">&copy; 2017&dash;2024</p>
  </form>
</main>

<?php loadPartial("footer");?>
<?php loadPartial("end");?>