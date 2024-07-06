<?php loadPartial("head");?>
<?php loadPartial("navbar");?>

<main class="main">
  <header class="container header py-5">
    <div class="row">
      <div class="col-md-6 d-flex flex-column justify-content-center py-4">
        <h1 class="display-5">
          Stay Updated with the <br />
          Latest Tech Trends
        </h1>
        <p class="mb-3 pb-3 text-muted">
          Explore insightful articles, news, and reviews from our expert
          writers
        </p>
        <a href="/blog" class="align-self-start btn btn-lg btn-primary text-light">View Blogs</a>
      </div>
      <div class="col-md-6">
        <img src="img/hero.3668c81f.jpg" alt="two people programming" class="img-fluid rounded shadow" />
      </div>
    </div>
  </header>
  <section class="container py-5">
    <div class="row">
      <div class="col-lg-8 col-md-12 pe-5">
        <h3 class="mb-3">Recent Story</h3>
        <p class="mb-5 text-muted">Recent News Posted About Tech</p>
        <div class="blogs">
          <?php foreach ($posts as $post): ?>

          <div class="card mb-3">
            <div class="g-0 row">
              <div class="col-md-4">
                <img src="<?=$post['postImage']?>" class="h-100 img-fluid object-fit-cover rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body py-4">
                  <span
                    class="bg-dark card__tag d-inline-block mb-3 px-3 py-1 rounded-pill text-light"><?=$post['category']?></span>
                  <h5 class="card-title"><?=$post['postTitle']?></h5>
                  <p>
                    <span class="text-muted">By <a
                        href="/author/<?=$post['userId']?>"><?="{$post['firstName']} {$post['lastName']}"?></a></span>
                    <span class="text-muted">
                      <i class="d-inline-block fa-clock fa-regular ms-2"></i>
                      <?php echo date("Y-m-d", strtotime($post['createdAt'])); ?>
                    </span>
                  </p>
                  <p class="card-text">
                    <?php echo substr($post['postBody'], 0, 100) . " ..."; ?>
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                  <a href="/blog/<?=$post['postId']?>">Read More <i class="fa-chevron-right fa-solid fs-6"></i></a>
                </div>
              </div>
            </div>
          </div>

          <?php endforeach;?>

        </div>
        <a href="/blog" class="btn btn-primary text-light">View All Blogs</a>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="card mb-4">
          <div class="card-header">Search</div>
          <div class="card-body">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Enter search term..."
                aria-label="Enter search term..." aria-describedby="button-search" />
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
  </section>
</main>

<?php loadPartial("footer");?>
<?php loadPartial("end");?>