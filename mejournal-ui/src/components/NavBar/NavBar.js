import React from 'react';
import Style from './style.css'

const navbar = ({ user, onLogout }) => {

  const onLogoutClicked = e => {
    e.preventDefault();
    onLogout(e);
  };

  const Profile = () => <div class="dropdown">
    <div className="dropbtn profile">
      <img className="picture" src={user.picture} /> {user.firstName}
    </div>
    <div class="dropdown-content">
      <a href="#" onClick={onLogoutClicked}>Logout</a>
    </div>
  </div>;

  const Form = () => <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>;

  const content = user && <><Form /><Profile /></>;
  return (
    <nav className="navbar-light bg-light ">
      <a className="navbar-brand">MeJournal</a>

      {content}

    </nav>
  );
}

export default navbar;