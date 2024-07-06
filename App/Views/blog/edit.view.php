<?php loadPartial("head");?>
<?php loadPartial("navbar");?>

<main class="container-96 mb-5 py-5">
  <div class="py-5 text-center">
    <img class="d-block mb-4 mx-auto" src="img/logo.3a251448.png" alt width="72" />
    <h2>Write About Tech</h2>
    <p class="lead">Share information you know.</p>
  </div>
  <form class="mx-auto needs-validation w-75" novalidate>
    <div class="g-3 row">
      <div class="col-12">
        <label for="postTitle" class="form-label">Post Title</label>
        <input type="text" name="postTitle" class="form-control" id="postTitle" placeholder="Post Title" required />
        <div class="invalid-feedback">Post Title Cannot be empty</div>
      </div>
      <div class="col-sm-6">
        <label for="postTags" class="form-label">Post Tags</label>
        <input type="text" name="postTags" class="form-control" id="postTags" placeholder="Separate Tags By Comma" />
      </div>
      <div class="col-sm-6">
        <label for="postCategory" class="form-label">Post Category</label>
        <select name="postCategory" class="form-select" id="postCategory" required>
          <option value>Choose...</option>
          <option value>Software</option>
          <option value>Hardware</option>
          <option value>Gadget</option>
          <option value>Internet</option>
          <option value>Web Development</option>
          <option value>Software Development</option>
        </select>
        <div class="invalid-feedback">Please select a valid Category.</div>
      </div>
      <div class="col-12">
        <label for="postImage" class="form-label">Post Image</label>
        <input type="file" name="postImage" class="form-control" id="postImage" required />
        <div class="invalid-feedback">Please include an image.</div>
      </div>
    </div>
    <hr class="my-4" />
    <div class="col-12">
      <label for="postBody" class="form-label">Post Body</label>
      <textarea type="text" name="postBody" class="form-control" id="postBody" placeholder="Write the post" rows="11"
        required></textarea>
      <div class="invalid-feedback">Post can not be empty!</div>
    </div>
    <hr class="my-4" />
    <button class="btn btn-lg btn-primary text-light w-100" type="submit">
      Add Post
    </button>
  </form>
</main>

<?php loadPartial("footer");?>
<?php loadPartial("end");?>