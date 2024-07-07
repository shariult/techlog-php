<?php loadPartial("head");?>
<?php loadPartial("navbar");?>

<main class="container-96 mb-5 py-5">
  <div class="py-5 text-center">
    <img class="d-block mb-4 mx-auto" src="img/logo.3a251448.png" alt width="72" />
    <h2>Register</h2>
    <p class="lead">Experience Full Version of TechLog for FREE</p>
  </div>
  <form class="needs-validation px-4" method="post" action="/register" enctype="multipart/form-data" novalidate>
    <div class="g-3 mb-3 row">
      <div class="col-sm-6">
        <label for="firstName" class="form-label">First name</label>
        <input type="text" name="firstName" class="form-control" id="firstName"
          value="<?=$userData['firstName'] ?? ''?>" required />
        <div class="invalid-feedback">Valid first name is required.</div>
        <br /><?=outFormError($error ?? null, "firstName")?>
      </div>
      <div class="col-sm-6">
        <label for="lastName" class="form-label">Last name</label>
        <input type="text" name="lastName" class="form-control" id="lastName" value="<?=$userData['lastName'] ?? ''?>"
          required />
        <div class="invalid-feedback">Valid last name is required.</div>
        <br /><?=outFormError($error ?? null, "lastName")?>
      </div>
      <div class="col-sm-6">
        <label for="username" class="form-label">Username</label>
        <div class="has-validation input-group">
          <span class="input-group-text">&copy;</span>
          <input type="text" name="username" class="form-control" id="username" placeholder="Username"
            value="<?=$userData['username'] ?? ''?>" required />
          <div class="invalid-feedback">Your username is required.</div>
        </div>
        <?=outFormError($error ?? null, "username")?>
      </div>
      <div class="col-sm-6">
        <label for="password" class="form-label">Password</label>
        <div class="has-validation input-group">
          <span class="input-group-text">&sharp;</span>
          <input type="password" name="password" class="form-control" id="password" placeholder="Password" required />
          <div class="invalid-feedback">Password is required.</div>
        </div>
        <?=outFormError($error ?? null, "password")?>
      </div>
      <div class="col-12">
        <label for="email" class="form-label">Email</label>
        <input type="email" name="email" class="form-control" id="email" placeholder="you&copy;example.com"
          value="<?=$userData['email'] ?? ''?>" required />
        <div class="invalid-feedback">
          Please enter a valid email address.
        </div>
        <br /><?=outFormError($error ?? null, "email")?>
      </div>
      <div class="col-sm-6">
        <label for="profileImage" class="form-label">Profile Image</label>
        <input type="file" name="profileImage" class="form-control" id="profileImage" />
        <br /><?=outFormError($error ?? null, "profileImage")?>
      </div>
      <div class="col-sm-6">
        <label for="country" class="form-label">Country</label>
        <input type="text" name="country" class="form-control" id="country" value="<?=$userData['country'] ?? ''?>"
          placeholder="United States" />
        <br /><?=outFormError($error ?? null, "country")?>
      </div>
      <div class="col-6">
        <label for="profession" class="form-label">Profession
          <span class="text-body-secondary">(Optional)</span></label>
        <input type="text" name="profession" class="form-control" id="profession" placeholder="Your Profession"
          value="<?=$userData['profession'] ?? ''?>" />
        <br /><?=outFormError($error ?? null, "profession")?>
      </div>
      <div class="col-6">
        <label for="birthDate" class="form-label">Birth Date
          <span class="text-body-secondary">(Optional)</span></label>
        <input type="date" name="birthDate" class="form-control" id="birthDate" placeholder="Your Birth Date"
          value="<?=$userData['birthDate'] ?? ''?>" />
        <br /><?=outFormError($error ?? null, "birthDate")?>
      </div>
      <div class="col-12">
        <label for="about" class="form-label">About You
          <span class="text-body-secondary">(Optional)</span></label>
        <textarea type="text" name="about" class="form-control" id="about" placeholder="Something About You"
          rows="2"><?=$userData['about'] ?? ''?></textarea>
        <br /><?=outFormError($error ?? null, "about")?>
      </div>
    </div>
    <button class="btn btn-lg btn-primary text-light" type="submit">
      Register
    </button>
  </form>
</main>

<?php loadPartial("footer");?>
<?php loadPartial("end");?>