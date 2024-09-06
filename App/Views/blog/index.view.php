<?php loadPartial("head");?>
<?php loadPartial("navbar");?>

<main class="main">
  <header class="bg-light border-bottom header-page mb-4 py-5">
    <div class="container my-5">
      <div>
        <h1 class="fw-bolder text-light">Welcome to Tech Log!</h1>
        <p class="lead mb-0">Stay Updated with the Latest Tech Trends</p>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="card mb-4">
          <a href="#!"><img class="card-img-top object-fit-cover" src="img/blog-img.ee203199.jpg" alt="..."
              height="400" /></a>
          <div class="card-body">
            <div class="small text-muted">January 1, 2023</div>
            <h2 class="card-title">Featured Post Title</h2>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
              laboriosam. Dicta expedita corporis animi vero voluptate
              voluptatibus possimus, veniam magni quis!
            </p>
            <a class="btn btn-primary text-light" href="#">Read more →</a>
          </div>
        </div>
        <div>
          <?php foreach ($posts as $post): ?>

          <div class="card mb-3">
            <div class="g-0 row">
              <div class="col-md-4">
                <img src="/img/posts/<?=$post['postImage']?>" class="h-100 img-fluid object-fit-cover rounded-start"
                  alt="..." />
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
        <nav aria-label="Pagination">
          <hr class="my-0" />
          <ul class="justify-content-center my-4 pagination">
            <!-- <li class="disabled page-item">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a>
            </li> -->
            <?php for ($i = 1; $i <= $totalPages; $i++): ?>
            <li class="page-item <?=(int) $pageNum === (int) $i ? 'active' : ''?>" aria-current="page">
              <a class="page-link" href="/blog?page=<?=$i?>"><?=$i?></a>
            </li>
            <?php endfor;?>


            <!--<li class="page-item">
              <a class="page-link" href="#!">Older</a>
            </li> -->
          </ul>
        </nav>
      </div>
      <div class="col-lg-4">
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
  </div>
</main>

<?php loadPartial("footer");?>
<?php loadPartial("end");?>