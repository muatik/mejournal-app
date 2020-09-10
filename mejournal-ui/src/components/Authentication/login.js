import React from 'react';
import GoogleLogin from 'react-google-login';
import config from './config';
import './style.css'

const Login = ({ onLogin }) => {
  const onSuccess = (response) => {
    onLogin(response.tokenId);
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (<div className="login">
    <GoogleLogin
      clientId={config.clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      scope={'profile email'}
      cookiePolicy={'single_host_origin'} />
  </div>);
}

export default Login;