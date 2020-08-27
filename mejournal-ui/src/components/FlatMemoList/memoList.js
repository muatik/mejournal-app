import React from 'react';
import moment from 'moment'
import Day from './day'
import Style from './style.css'

const MemoList = ({ memoList, onMemoFormSubmit, onPinChanged }) => {

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

    const getDayKey = (date) => {
        const dayKey = date.format('YYYY-MM-DD');
        return dayKey
    }

    // create empty memoListByDays
    const memoListByDays = {}
    for (let currentDate = startDate; currentDate <= now; currentDate.add(1, 'day')) {
        const dayKey = getDayKey(currentDate);
        getOrDefault(memoListByDays, dayKey, { date: moment(currentDate), items: new Array() })
    }

    // populate memoListByDays
    memoList.map(memo => {
        const dayKey = getDayKey(memo.date);
        memoListByDays[dayKey].items.push(memo);
    })

    const views = Object.values(memoListByDays)
        .reverse()
        .map(day => <Day
            day={day}
            onMemoFormSubmit={onMemoFormSubmit}
            onPinChanged={onPinChanged} />)

    return <ul className="memoList">{views}</ul>;
}

export default MemoList;