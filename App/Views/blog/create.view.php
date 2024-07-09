<?php loadPartial("head");?>
<?php loadPartial("navbar");?>

<main class="container-96 mb-5 py-5">
  <div class="py-5 text-center">
    <img class="d-block mb-4 mx-auto" src="/img/logo.3a251448.png" alt width="72" />
    <h2>Write About Tech</h2>
    <p class="lead">Share information you know.</p>
  </div>
  <form method="post" action="/blog" enctype="multipart/form-data" class="mx-auto needs-validation w-75" novalidate>
    <div class="g-3 row">
      <div class="col-12">
        <label for="postTitle" class="form-label">Post Title</label>
        <input type="text" name="postTitle" class="form-control" id="postTitle" placeholder="Post Title"
          value="<?=$postData['postTitle'] ?? ''?>" required />
        <div class="invalid-feedback">Post Title Cannot be empty</div>
        <?=outFormError($error ?? null, "postTitle")?>
      </div>
      <div class="col-sm-6">
        <label for="postTags" class="form-label">Post Tags</label>
        <input type="text" name="postTags" class="form-control" id="postTags" placeholder="Separate Tags By Comma"
          value="<?=$postData['postTags'] ?? ''?>" />
        <?=outFormError($error ?? null, "postTags")?>
      </div>
      <div class="col-sm-6">
        <label for="postCategoryId" class="form-label">Post Category</label>
        <select name="postCategoryId" class="form-select" id="postCategoryId" required>
          <option value="" disabled selected>Choose...</option>

          <?php foreach ($categories as $category): ?>
          <option value="<?=$category['categoryId']?>"
            <?=isset($postData) && (int) $postData['postCategoryId'] === (int) $category['categoryId'] ? 'selected' : ''?>>
            <?=$category['category']?>
          </option>
          <?php endforeach;?>

        </select>
        <div class="invalid-feedback">Please select a valid Category.</div>
        <?=outFormError($error ?? null, "postCategory")?>
      </div>
      <div class="col-12">
        <label for="postImage" class="form-label">Post Image</label>
        <input type="file" name="postImage" class="form-control" id="postImage" required />
        <div class="invalid-feedback">Please include an image.</div>
        <?=outFormError($error ?? null, "postImage")?>
      </div>
    </div>
    <hr class="my-4" />
    <div class="col-12">
      <label for="postBody" class="form-label">Post Body</label>
      <textarea type="text" name="postBody" class="form-control" id="postBody" placeholder="Write the post" rows="11"
        required><?=$postData['postBody'] ?? ''?></textarea>
      <div class="invalid-feedback">Post can not be empty!</div>
      <?=outFormError($error ?? null, "postBody")?>
    </div>
    <hr class="my-4" />
    <button class="btn btn-lg btn-primary text-light w-100" type="submit">
      Add Post
    </button>
  </form>
</main>

<?php loadPartial("footer");?>
<?php loadPartial("end");?>