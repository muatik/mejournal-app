import React from 'react';
import Memo from '../Memo';

const MemoList = () => {
  const memoList = [
    {
      'id': 1,
      'title': 'the first item',
      'date': new Date()
    },
    {
      'id': 2,
      'title': 'another item',
      'date': new Date()
    }
  ]
  const memoListView = memoList.map(memo =>
    <li key={memo.id}><Memo memo={memo} /></li>
  );
  return (
    <ul>
      {memoListView}
    </ul>
  );
}

export default MemoList;