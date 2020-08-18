import React from 'react';
import MonthView from './monthView';
import moment from 'moment'

const MemoList = ({ memoList }) => {

  let aMonthEarlier = moment().subtract(1, 'months');
  let oldestMemo = memoList[memoList.length - 1]
  let startDate = aMonthEarlier < oldestMemo.date ? aMonthEarlier : moment(oldestMemo.date);
  const now = moment()

  const months = {}
  const getOrDefault = (data, key, defaultvalue) => {
    if (key in data) {
      return data[key];
    }
    data[key] = defaultvalue;
    return defaultvalue;
  }

  const generateKeys = (date) => {
    const monthKey = date.format('YYYY-MM')
    const weekKey = date.isoWeek();
    const dayKey = date.format('YYYY-MM-DD');
    return { monthKey, weekKey, dayKey }
  }

  for (let currentDate = startDate; currentDate <= now; currentDate.add(1, 'day')) {
    const { monthKey, weekKey, dayKey } = generateKeys(currentDate);

    const month = getOrDefault(months, monthKey, { date: moment(currentDate), pinnedItems: [], weeks: {} })
    const week = getOrDefault(month.weeks, weekKey, { date: moment(currentDate), pinnedItems: [], days: {} })
    const day = getOrDefault(week.days, dayKey, { date: moment(currentDate), items: [] })
  }

  memoList.map(memo => {
    const { monthKey, weekKey, dayKey } = generateKeys(memo.date);

    if (memo['monthlyHighlight']) {
      months[monthKey].pinnedItems.push(memo);
    }

    if (memo['weeklyHighlight']) {
      months[monthKey].weeks[weekKey].pinnedItems.push(memo);
    }

    months[monthKey].weeks[weekKey].days[dayKey].items.push(memo);
  })

  const views = Object.values(months)
    .reverse()
    .map(month => <MonthView month={month} key={month} />)

  return <ul className="memoList">{views}</ul>;
}

export default MemoList;