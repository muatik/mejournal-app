import React from 'react';
import Memo from '../Memo';

const MemoList = ({ memoList }) => {

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