import React from 'react';
import Memo from '../Memo';
import BaseView from './baseView';

const dayView = ({ day }) => {
  const formatDate = date => date.format('DD MMMM YYYY')
  return (<BaseView
    memoGroup={day}
    className="day"
    title={formatDate(day.date)}
    subGroup={day.items}
    subGroupMapper={item => <li>a</li>} />
  );
}

export default dayView;