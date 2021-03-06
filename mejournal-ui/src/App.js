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
  memoService.setAuthentication(authentication?.user);

  const onLogin = async user => {
    setAuthentication({ user });
  };

  const onLogout = async () => {
    setAuthentication(null);
    setMemoList({ loaded: false, list: [] });
  };

  const handleKnownError = e => {
    if (e instanceof AuthenticationError) {
      console.error('Authentication error. Logging out...');
      onLogout();
    } else if (e instanceof ServerError) {
      console.error('Error occurred on the remote server');
    } else {
      console.error('Error occurred', e);
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

  const Loading = () => (<div className="center">Loading...</div>)
  return (
    <div>
      <NavBar
        user={authentication && authentication.user}
        onLogout={onLogout} />
      {!authentication ? (
        <Welcome onLogin={onLogin} />
      ) :
        !memoList.loaded ? (<Loading />) : (
          <MemoPage
            memoList={memoList.list}
            onMemoFormSubmit={onMemoFormSubmit}
            onDeleted={onDeleted}
            onPinChanged={onPinChanged}
          />)

      }
    </div>
  );
};

export default App;
