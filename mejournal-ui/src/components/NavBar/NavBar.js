import React from 'react';
import './style.css';

const NavBar = ({ user, onLogout }) => {
  const onLogoutClicked = e => {
    e.preventDefault();
    onLogout(e);
  };

  const Profile = () => (
    <div className="dropdown">
      <div className="dropbtn profile">
        <img className="picture" alt="" src={user.photoURL} />{' '}
        {user.displayName}
      </div>
      <div className="dropdown-content">
        <a href="#logout" onClick={onLogoutClicked}>
          Logout
        </a>
      </div>
    </div>
  );

  const content = user && (
    <>
      <Profile />
    </>
  );
  return (
    <nav className="navbar-light bg-light ">
      <a className="navbar-brand" href="/">
        MeJournal
      </a>

      {content}
    </nav>
  );
};

export default NavBar;
