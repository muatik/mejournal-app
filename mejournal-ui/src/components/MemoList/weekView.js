import React from 'react';
import DayView from './dayView';
import BaseView from './baseView';

const WeekView = ({ week }) => {
  const formatDate = date => date.isoWeek()
  return (<BaseView
    memoGroup={week}
    className="week"
    title={formatDate(week.date) + ".week"}
    formatDate={formatDate}
    subGroup={week.days}
    subGroupMapper={day => <DayView day={day} />} />
  );
}

export default WeekView;