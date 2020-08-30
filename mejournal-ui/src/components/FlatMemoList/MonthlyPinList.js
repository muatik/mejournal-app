import React from 'react';
import BaseList from './BaseList'

const MonthlyPinList = ({ memoList, onMemoFormSubmit, onPinChanged, onDeleted }) => {
    const getGroupKey = date => date.format("YYYY-MM");
    const getTitle = date => date.format("MMM YYYY");

    return <BaseList
        memoList={memoList.filter(memo => memo.monthlyHighlight)}
        getTitle={getTitle}
        getGroupKey={getGroupKey}
        onMemoFormSubmit={onMemoFormSubmit}
        onDeleted={onDeleted}
        onPinChanged={onPinChanged} />
}

export default MonthlyPinList;