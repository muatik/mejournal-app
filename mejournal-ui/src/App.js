import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MemoList from './components/MemoList';
import MemoForm from './components/MemoForm';
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

  const onMemoFormSubmit = ({ text, date }, onComplete) => {
    const newMemo = {
      'id': memoList.length + 1,
      'text': text,
      'date': date
    }
    console.log(newMemo)
    return new Promise((resovle, reject) => {
      setMemoList([...memoList, newMemo])
      resovle();
    });


  }

  return (<div>
    <NavBar />
    <MemoForm onSubmit={onMemoFormSubmit} />
    <MemoList memoList={memoList} />
  </div>);
}

export default App;
