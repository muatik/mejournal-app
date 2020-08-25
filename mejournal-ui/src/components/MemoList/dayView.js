import React from 'react';
import Memo from '../Memo';
import BaseView from './baseView';
import MemoForm from './memoForm';

const dayView = ({ day, onMemoFormSubmit, onPinChanged }) => {
  const formatDate = date => date.format('DD MMMM YYYY')
  return (<div>
    <BaseView
      memoGroup={day}
      className="day"
      title={formatDate(day.date)}
      subGroup={day.items}
      subGroupMapper={item => <Memo memo={item} onPinChanged={onPinChanged} />} />
    <MemoForm
      date={day.date}
      onMemoFormSubmit={onMemoFormSubmit} />
  </div>
  );
}

export default dayView;