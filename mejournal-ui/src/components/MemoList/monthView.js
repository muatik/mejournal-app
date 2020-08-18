import React from 'react';
import WeekView from './weekView';
import BaseView from './baseView';

const MonthView = ({ month }) => {
  const formatDate = date => date.format('MMMM YYYY');
  return (<BaseView
    memoGroup={month}
    className="month"
    title={formatDate(month.date)}
    subGroup={month.weeks}
    subGroupMapper={week => <WeekView week={week} />} />
  );
}

export default MonthView;