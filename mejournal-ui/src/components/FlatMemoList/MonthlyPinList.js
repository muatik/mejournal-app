import React from 'react';
import BaseList from './BaseList'
import MessageBox from './MessageBox';

const MonthlyPinList = ({ memoList, onMemoFormSubmit, onPinChanged, onDeleted }) => {
    const getGroupKey = date => date.format("YYYY-MM");
    const getTitle = date => date.format("MMM YYYY");
    const pinnedMemos = memoList.filter(memo => memo.monthlyHighlight)

    if (pinnedMemos.length == 0) {
        return <MessageBox message="No memo is monthly pinned" />;
    }

    return <BaseList
        memoList={pinnedMemos}
        getTitle={getTitle}
        getGroupKey={getGroupKey}
        onMemoFormSubmit={onMemoFormSubmit}
        onDeleted={onDeleted}
        onPinChanged={onPinChanged} />
}

export default MonthlyPinList;