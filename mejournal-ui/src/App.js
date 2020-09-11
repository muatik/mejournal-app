import React, { useState } from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import MemoService from './services/MemoService';
import MemoClient from './services/MemoClient';
import ServerError from './services/ServerError';
import AuthenticationError from './services/AuthenticationError';

import NavBar from './components/NavBar';
import MemoPage from './components/MemoPage';
import Welcome from './components/Welcome/Welcome';

const memoClient = new MemoClient({ baseUrl: 'http://localhost:8080' });
const memoService = new MemoService(null, memoClient);

const App = () => {
  const [authentication, setAuthentication] = useLocalStorage('authentication');
  const [memoList, setMemoList] = useState({ loaded: false, list: [] });
  memoService.setAuthentication(authentication);

  const onLogin = async token => {
    memoClient
      .authenticateWithGoogle(token)
      .then(user => {
        setAuthentication({ token: token, user: user });
      })
      .catch(err => alert(err));
  };

  const onLogout = async () => {
    setAuthentication(null);
    setMemoList({ loaded: false, list: [] });
  };

  const handleKnownError = e => {
    if (e instanceof AuthenticationError) {
      alert('Authentication error. Logging out...');
      onLogout();
    } else if (e instanceof ServerError) {
      alert('Error occurred on the remote server');
    }
  };

  const refreshMemoList = async () => {
    const memo = await memoService.getAll();
    setMemoList({ loaded: true, list: [...memo] });
  };

  const onMemoFormSubmit = ({ text, date }) => {
    return memoService
      .add(text, date)
      .then(() => refreshMemoList())
      .catch(handleKnownError);
  };

  const onPinChanged = (memo, pinState) => {
    return memoService
      .changePinState(memo, pinState.weeklyHighlight, pinState.monthlyHighlight)
      .then(() => refreshMemoList())
      .catch(handleKnownError);
  };

  const onDeleted = memoToBeDeleted => {
    return memoService
      .delete(memoToBeDeleted)
      .then(() => refreshMemoList())
      .catch(handleKnownError);
  };

  if (authentication && !memoList.loaded) {
    refreshMemoList().catch(handleKnownError);
  }

  return (
    <div>
      <NavBar
        user={authentication && authentication.user}
        onLogout={onLogout}
      />
      {!authentication ? (
        <Welcome onLogin={onLogin} />
      ) : (
        <MemoPage
          memoList={memoList.list}
          onMemoFormSubmit={onMemoFormSubmit}
          onDeleted={onDeleted}
          onPinChanged={onPinChanged}
        />
      )}
    </div>
  );
};

export default App;
