import React from 'react';
import BaseList from './BaseList'

const WeeklyPinList = ({ memoList, onMemoFormSubmit, onPinChanged }) => {
    const getGroupKey = date => date.year() + " " + date.isoWeek();
    const getTitle = date => date.isoWeek() + ".Week of " + date.year();

    return <BaseList
        memoList={memoList.filter(memo => memo.weeklyHighlight)}
        getGroupKey={getGroupKey}
        getTitle={getTitle}
        onMemoFormSubmit={onMemoFormSubmit}
        onPinChanged={onPinChanged} />
}

export default WeeklyPinList;