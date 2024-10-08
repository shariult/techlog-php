<?php loadPartial("head");?>
<?php loadPartial("navbar");?>

<main class="container main py-5">
  <div class="row">
    <div class="col-lg-8">
      <article>
        <header class="mb-4">
          <h1 class="fw-bolder mb-1"><?=$post['postTitle']?></h1>
          <div class="fst-italic mb-2 text-muted">
            Posted on <?=date("Y-m-d", strtotime($post['createdAt']))?> by
            <?="{$post['firstName']} {$post['lastName']}"?>
          </div>

          <?php foreach (explode(", ", $post['postTags']) as $tag): ?>
          <a class="badge bg-secondary link-light text-decoration-none" href="/search?search=<?=$tag?>"><?=$tag?></a>
          <?php endforeach;?>

        </header>
        <figure class="mb-4">
          <img class="img-fluid rounded" src="/img/posts/<?=$post["postImage"]?>" alt="..." />
        </figure>
        <section class="mb-5">
          <p class="bg-dark d-inline-block mb-4 px-3 py-1 rounded-pill text-light">
            <a href="/blog?categoryId=<?=$post['categoryId']?>" class="text-light">Category: <?=$post['category']?></a>
          </p>
          <p class="fs-5 mb-4">
            <?=$post['postBody']?>
          </p>
        </section>
      </article>
      <section class="mb-5">
        <div class="bg-light card">
          <div class="card-body">
            <form method="post" action="/blog/<?=$post['postId']?>/review" class="mb-4">
              <textarea name="review" class="form-control mb-3" rows="3"
                placeholder="Join the discussion and leave a comment!"><?=$reviewInputData['review'] ?? ''?></textarea>
              <?=outFormError($error ?? null, "review")?>
              <button type="submit" class="btn btn-secondary text-light">
                Add Review
              </button>
            </form>

            <?php if (!empty($reviewArr)): ?>

            <?php foreach ($reviewArr as $review): ?>
            <div class="d-flex mb-4">
              <div class="flex-shrink-0">
                <img class="rounded-circle" src="/img/users/<?=$review['authorImage']?>" alt="..." height="64" />
              </div>
              <div class="ms-3">
                <div class="fw-bold"><?=$review['authorName']?></div>
                <?=$review['review']?>
              </div>
            </div>
            <?php endforeach;?>

            <?php endif;?>

          </div>
        </div>
      </section>
    </div>
    <div class="col-lg-4">
      <div class="card mb-4">
        <div class="card-header">Search</div>
        <div class="card-body">
          <div class="input-group">
            <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..."
              aria-describedby="button-search" />
            <button class="btn btn-primary text-light" id="button-search" type="button">
              Go!
            </button>
          </div>
        </div>
      </div>
      <div class="card mb-4">
        <div class="card-header">Categories</div>
        <div class="card-body">
          <div class="row">
            <ul class="list-group mb-0">

              <?php foreach ($categories as $category): ?>
              <li class="list-group-item"><a
                  href="/blog?categoryId=<?=$category['categoryId']?>"><?=$category['category']?></a></li>
              <?php endforeach;?>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<?php loadPartial("footer");?>
<?php loadPartial("end");?>