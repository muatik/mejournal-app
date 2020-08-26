import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MemoList from './components/MemoList';
import moment from 'moment';


const App = () => {
  const [memoList, setMemoList] = useState([
    {
      'id': 1,
      'text': 'the first item',
      'date': moment('2019-12-21')
    },
    {
      'id': 2,
      'text': 'another item',
      'date': moment('2020-02-18')
    },
    {
      'id': 3,
      'text': 'another item',
      'date': moment('2020-07-8')
    },
    {
      'id': 4,
      'text': '4rd item',
      'date': moment('2020-07-10'),
      'weeklyHighlight': true
    },
    {
      'id': 5,
      'text': '5th item',
      'date': moment('2020-07-16'),
      'monthlyHighlight': true
    },
    {
      'id': 6,
      'text': '6th item',
      'date': moment('2020-07-20')
    },
    {
      'id': 7,
      'text': '7th item',
      'date': moment('2020-07-23')
    }
  ].reverse());


  const onMemoFormSubmit = ({ text, date }) => {
    const newMemo = {
      'id': memoList.length + 1,
      'text': text,
      'date': date
    }

    return new Promise((resovle, reject) => {
      setMemoList([newMemo, ...memoList]);
      resovle();
    });
  }

  const onPinChanged = (memo, pinState) => {
    const newMemoList = memoList
      .map(m => m.id === memo.id ? { ...m, ...pinState } : m);
    setMemoList(newMemoList);
  }

  return (<div>
    <NavBar />
    <MemoList
      memoList={memoList}
      onMemoFormSubmit={onMemoFormSubmit}
      onPinChanged={onPinChanged} />
  </div>);
}

export default App;
