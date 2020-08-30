import React from 'react';
import { DayList, WeeklyPinList, MonthlyPinList } from '../FlatMemoList'
import TabNav from '../NavTab'
import Style from './style.css'

const MemoPage = ({ memoList, onMemoFormSubmit, onPinChanged, onDeleted }) => {

  const memoListDayView = <DayList
    memoList={memoList}
    onMemoFormSubmit={onMemoFormSubmit}
    onDeleted={onDeleted}
    onPinChanged={onPinChanged} />

  const memoListWeekView = <WeeklyPinList
    memoList={memoList}
    onMemoFormSubmit={onMemoFormSubmit}
    onDeleted={onDeleted}
    onPinChanged={onPinChanged} />

  const memoListMonthView = <MonthlyPinList
    memoList={memoList}
    onMemoFormSubmit={onMemoFormSubmit}
    onDeleted={onDeleted}
    onPinChanged={onPinChanged} />

  const tabs = [
    { title: "Days", target: memoListDayView },
    { title: "Weekly Pins", target: memoListWeekView },
    { title: "Monthly Pins", target: memoListMonthView }
  ]

  return (
    <TabNav
      tabs={tabs}
      entryTab="Days"
      className="container justify-content-md-center col-sm-10 mt-5" />
  );
}

export default MemoPage;