import React from 'react';
import Memo from '../Memo/memo'
import MemoForm from '../MemoForm'

const MemoGroup = ({ group, getTitle, isFormVisible, onMemoFormSubmit, onPinChanged }) => {
  const memoViews = group.items.map(memo => <Memo
    memo={memo}
    onPinChanged={onPinChanged} />)

  const form = <MemoForm
    date={group.date}
    onMemoFormSubmit={onMemoFormSubmit} />

  return (<li>
    <h5 className="title" >
      {getTitle(group.date)}
    </h5>
    <ul className="memoList">
      {memoViews}
    </ul>
    {isFormVisible && form}
  </li>);
};

export default MemoGroup;