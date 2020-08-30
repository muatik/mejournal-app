import React from 'react';
import DayView from './dayView';
import BaseView from './baseView';
import moment from 'moment';

const WeekView = ({ week, onMemoFormSubmit, onPinChanged }) => {
    const formatDate = date => date.isoWeek()
    const now = moment()
    const unFolded = now.year() == week.date.year() && now.isoWeek() == week.date.isoWeek()
    return (<BaseView
        memoGroup={week}
        className="week"
        title={formatDate(week.date) + ".week"}
        subGroup={week.days}
        onPinChanged={onPinChanged}
        unFolded={unFolded}
        subGroupMapper={day => <DayView
            day={day}
            onMemoFormSubmit={onMemoFormSubmit}
            onPinChanged={onPinChanged} />} />
    );
}

export default WeekView;