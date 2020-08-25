import React from 'react';
import DayView from './dayView';
import BaseView from './baseView';

const WeekView = ({ week, onMemoFormSubmit, onPinChanged }) => {
    const formatDate = date => date.isoWeek()
    return (<BaseView
        memoGroup={week}
        className="week"
        title={formatDate(week.date) + ".week"}
        subGroup={week.days}
        onPinChanged={onPinChanged}
        subGroupMapper={day => <DayView
            day={day}
            onMemoFormSubmit={onMemoFormSubmit}
            onPinChanged={onPinChanged} />} />
    );
}

export default WeekView;