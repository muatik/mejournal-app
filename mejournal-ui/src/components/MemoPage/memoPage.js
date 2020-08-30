import React from 'react';
import { DayList, WeeklyPinList, MonthlyPinList } from '../FlatMemoList'
import TabNav from '../NavTab'
import Style from './style.css'

const MemoPage = ({ memoList, onMemoFormSubmit, onPinChanged }) => {

  const memoListDayView = <DayList
    memoList={memoList}
    onMemoFormSubmit={onMemoFormSubmit}
    onPinChanged={onPinChanged} />

  const memoListWeekView = <WeeklyPinList
    memoList={memoList}
    onMemoFormSubmit={onMemoFormSubmit}
    onPinChanged={onPinChanged} />

  const memoListMonthView = <MonthlyPinList
    memoList={memoList}
    onMemoFormSubmit={onMemoFormSubmit}
    onPinChanged={onPinChanged} />

  const tabs = [
    { title: "Days", target: memoListDayView },
    { title: "Weekly Pins", target: memoListWeekView },
    { title: "Monthly Pins", target: memoListMonthView }
  ]

  return (
    <TabNav tabs={tabs} entryTab="Days" />
  );
}

export default MemoPage;