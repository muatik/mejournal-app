import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MemoPage from './components/MemoPage';

import MemoService from './services/MemoService';

import Welcome from './components/Welcome/Welcome';



const App = () => {
  const [memoList, setMemoList] = useState({ loaded: false, list: [] });

  const refreshMemoList = () => setMemoList({ loaded: true, list: [...MemoService.getAll()] });

  if (!memoList.loaded) {
    refreshMemoList();
  }


  const onMemoFormSubmit = ({ text, date }) => {
    MemoService.add(text, date);
    refreshMemoList();
    return new Promise((resovle, reject) => {
      resovle();
    });
  }


  const onPinChanged = (memo, pinState) => {
    MemoService.changePinState(memo.id, pinState.weeklyHighlight, pinState.monthlyHighlight);
    refreshMemoList();
  }


  const onDeleted = (memoToBeDeleted) => {
    MemoService.remove(memoToBeDeleted.id);
    refreshMemoList();
  }

  return (<div>
    <NavBar />
    <Welcome />
    {/* <MemoPage
      memoList={memoList.list}
      onMemoFormSubmit={onMemoFormSubmit}
      onDeleted={onDeleted}
      onPinChanged={onPinChanged} /> */}
  </div>);
}

export default App;
