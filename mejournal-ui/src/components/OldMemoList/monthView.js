import React from 'react';
import WeekView from './weekView';
import BaseView from './baseView';
import moment from 'moment';

const MonthView = ({ month, onMemoFormSubmit, onPinChanged }) => {
  const formatDate = date => date.format('MMMM YYYY');
  const unFolded = moment().format("YYYY-MM") == month.date.format("YYYY-MM")

  return (<BaseView
    memoGroup={month}
    className="month"
    title={formatDate(month.date)}
    subGroup={month.weeks}
    onPinChanged={onPinChanged}
    unFolded={unFolded}
    subGroupMapper={week => <WeekView
      week={week}
      onMemoFormSubmit={onMemoFormSubmit}
      onPinChanged={onPinChanged} />} />
  );
}

export default MonthView;