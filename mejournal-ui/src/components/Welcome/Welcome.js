import React from 'react';
import Login from "../Authentication";

const Welcome = () => {
  return (<div className="container">
    <div class="jumbotron  m-4">
      <h1 class="display-4">Hello, you!</h1>
      <p class="lead">Build and track your own history while staying motivated and productive.</p>
      <hr class="my-4" />
      <p>Give your daily updates, pin the important ones and filter, review them later by daily, weekly and monthly.</p>
      <Login />
    </div>
  </div>);
}

export default Welcome;