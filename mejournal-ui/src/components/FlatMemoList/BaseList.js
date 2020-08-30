import React from 'react';
import moment from 'moment'
import MemoGroup from './MemoGroup'

const BaseList = ({
    memoList,
    groupFilter,
    formVisibilityMapper,
    getTitle,
    getGroupKey,
    onMemoFormSubmit,
    onDeleted,
    onPinChanged }) => {

    const hideEmptyDays = true;
    let aMonthEarlier = moment().subtract(1, 'months');
    let oldestMemo = memoList[memoList.length - 1]
    let startDate = aMonthEarlier < oldestMemo.date ? aMonthEarlier : moment(oldestMemo.date);
    const now = moment()

    const getOrDefault = (data, key, defaultvalue) => {
        if (key in data) {
            return data[key];
        }
        data[key] = defaultvalue;
        return defaultvalue;
    }

    const memoGroups = {}
    for (let currentDate = startDate; currentDate <= now; currentDate.add(1, 'day')) {
        const key = getGroupKey(currentDate);
        getOrDefault(memoGroups, key, { date: moment(currentDate), items: [] })
    }

    memoList
        .map(memo => memoGroups[getGroupKey(memo.date)].items.push(memo))

    const views = Object.values(memoGroups)
        .reverse()
        .filter(group => (!groupFilter && (!hideEmptyDays || group.items.length > 0)) || (groupFilter && groupFilter(group)))
        .map(group => {
            return <MemoGroup
                group={group}
                getTitle={getTitle}
                isFormVisible={formVisibilityMapper && formVisibilityMapper(group)}
                onMemoFormSubmit={onMemoFormSubmit}
                onDeleted={onDeleted}
                onPinChanged={onPinChanged} />
        });

    return <ul className="memoList">{views}</ul>;
}

export default BaseList;