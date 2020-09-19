var firebase = require('firebase');
var firebaseui = require('firebaseui');

const config = {
  apiKey: 'AIzaSyCoQSlpE9W7fQZLW3Fzqv-mD6waT7Nmjco',
  authDomain: 'me-journal.firebaseapp.com',
  databaseURL: 'https://me-journal.firebaseio.com',
  projectId: 'me-journal',
  storageBucket: 'me-journal.appspot.com',
  messagingSenderId: '765699312039',
  appId: '1:765699312039:web:f0fda32ef24a15950f0e82',
  measurementId: 'G-WV4HQD6LK0',
};
firebase.initializeApp(config);

export const FbUI = new firebaseui.auth.AuthUI(firebase.auth());

export const FbConfig = {
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: () => {
      // The widget is rendered.
      // Hide the loader.
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Required to enable one-tap sign-up credential helper.
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>',
};

const startFirebaseUI = (elementId, signInSuccessWithAuthResult) => {
  const conf = { ...FbConfig };
  conf.callbacks.signInSuccessWithAuthResult = signInSuccessWithAuthResult;
  FbUI.start(elementId, conf);
};

export default startFirebaseUI;
