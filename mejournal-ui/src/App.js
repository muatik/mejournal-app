import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MemoList from './components/MemoList';
import MemoForm from './components/MemoForm';

const App = () => {
  const [memoList, setMemoList] = useState([
    {
      'id': 1,
      'text': 'the first item',
      'date': new Date()
    },
    {
      'id': 2,
      'text': 'another item',
      'date': new Date()
    }
  ]);

  const onMemoFormSubmit = ({ text, date }, onComplete) => {
    const newMemo = {
      'id': memoList.length + 1,
      'text': text,
      'date': date
    }
    setMemoList([...memoList, newMemo])
    onComplete();
  }

  return (<div>
    <NavBar />
    <MemoForm onSubmit={onMemoFormSubmit} />
    <MemoList memoList={memoList} />
  </div>);
}

export default App;
