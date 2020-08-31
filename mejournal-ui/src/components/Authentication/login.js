import React from 'react';
import GoogleLogin from 'react-google-login';
import config from './config';
import Style from './style.css'

const Login = () => {
  const onSuccess = (response) => {
    console.log(response);

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