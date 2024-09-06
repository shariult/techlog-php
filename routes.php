<?php

$router->get("/", "IndexController@getIndex");

$router->get("/login", "IndexController@getLogin", ["guest"]);
$router->post("/login", "IndexController@postLogin", ["guest"]);
$router->get("/register", "IndexController@getRegister", ["guest"]);
$router->post("/register", "IndexController@postRegister", ["guest"]);
$router->get("/logout", "IndexController@getLogout", ["auth"]);

$router->get("/blog", "BlogController@getBlogList");
$router->get("/blog/{postId}", "BlogController@getBlogShow");
$router->get("/blog/create", "BlogController@getBlogCreate", ["auth"]);
$router->post("/blog", "BlogController@postBlog", ["auth"]);
$router->get("/blog/{postId}/edit", "BlogController@getBlogEdit", ["auth"]);
$router->put("/blog/{postId}", "BlogController@putBlog", ["auth"]);

$router->post("/blog/{postId}/review", "ReviewController@postReview", ["auth"]);

?>