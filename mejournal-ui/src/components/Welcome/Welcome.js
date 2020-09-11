import React from "react";
import Login from "../Authentication";

const Welcome = ({ onLogin }) => {
  return (
    <div className="container">
      <div className="jumbotron  m-4">
        <h1 className="display-4">Hello, you!</h1>
        <p className="lead">
          Build and track your own history while staying motivated and
          productive.
        </p>
        <hr className="my-4" />
        <p>
          Give your daily updates, pin the important ones and filter, review
          them later by daily, weekly and monthly.
        </p>
        <Login onLogin={onLogin} />
      </div>
    </div>
  );
};

export default Welcome;
