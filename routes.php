<?php

$router->get("/", "IndexController@getIndex");
$router->get("/login", "IndexController@getLogin", ["guest"]);
$router->get("/logout", "IndexController@getLogout", ["auth"]);
$router->get("/register", "IndexController@getRegister", ["guest"]);

$router->get("/blog", "BlogController@getBlogList");
$router->get("/blog/create", "BlogController@getBlogCreate", ["auth"]);
$router->get("/blog/{postId}", "BlogController@getBlogShow");
$router->get("/blog/{postId}/edit", "BlogController@getBlogEdit", ["auth"]);

$router->post("/login", "IndexController@postLogin", ["guest"]);
$router->post("/register", "IndexController@postRegister", ["guest"]);
$router->post("/blog", "BlogController@postBlog", ["auth"]);
$router->post("/blog/{postId}/review", "ReviewController@postReview", ["auth"]);
$router->put("/blog/{postId}", "BlogController@putBlog", ["auth"]);

?>