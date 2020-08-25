import React from 'react';
import WeekView from './weekView';
import BaseView from './baseView';

const MonthView = ({ month, onMemoFormSubmit, onPinChanged }) => {
  const formatDate = date => date.format('MMMM YYYY');
  return (<BaseView
    memoGroup={month}
    className="month"
    title={formatDate(month.date)}
    subGroup={month.weeks}
    onPinChanged={onPinChanged}
    subGroupMapper={week => <WeekView
      week={week}
      onMemoFormSubmit={onMemoFormSubmit}
      onPinChanged={onPinChanged} />} />
  );
}

export default MonthView;