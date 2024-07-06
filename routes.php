<?php

$router->get("/", "IndexController@getIndex");
$router->get("/login", "IndexController@getLogin");
$router->get("/logout", "IndexController@getLogout");
$router->get("/register", "IndexController@getRegister");

$router->get("/blog", "BlogController@getBlogList");
$router->get("/blog/create", "BlogController@getBlogCreate");
$router->get("/blog/{postId}", "BlogController@getBlogShow");

$router->post("/login", "IndexController@postLogin");
$router->post("/register", "IndexController@postRegister");

?>