import React, { useEffect, useRef } from 'react';
import { startFirebaseUI } from '../../firebase';

const Login = ({ onLogin }) => {
  const onSuccess = response => {
    onLogin(response.user);
    return false;
  };

  const container = useRef(null);

  useEffect(() => {
    startFirebaseUI(container.current, onSuccess);
  });

  return (
    <>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
      />
      <div ref={container}></div>
    </>
  );
};

export default Login;
