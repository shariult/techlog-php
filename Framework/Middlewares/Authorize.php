<?php

namespace Framework\Middlewares;

use Framework\Session;

class Authorize {
  public function isAuthenticated() {
    return !empty(Session::get('user'));
  }

  public function handle($role) {
    if ($role === 'guest' && $this->isAuthenticated()) {
      return redirect('/');
    } elseif ($role === 'auth' && !$this->isAuthenticated()) {
      return redirect('/login');
    }
  }
}

?>