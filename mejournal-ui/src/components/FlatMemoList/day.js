import React from 'react';
import Memo from '../Memo/memo'
import MemoForm from './memoForm'

const Day = ({ day, onMemoFormSubmit, onPinChanged }) => {
  const memoViews = day.items.map(memo => <Memo
    memo={memo}
    onPinChanged={onPinChanged} />)

  return (<li>
    <h5 className="title" >
      <span>{day.date.format("dddd, Do MMM YYYY")}</span>
    </h5>
    <ul className="memoList">
      {memoViews}
    </ul>
    <MemoForm
      date={day.date}
      onMemoFormSubmit={onMemoFormSubmit} />
  </li>);
};

export default Day;