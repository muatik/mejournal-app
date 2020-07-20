import React from 'react';
import Memo from '../Memo';
import moment from 'moment'

const MemoList = ({ memoList }) => {

  const getWeekNumber = (date) => { console.log(moment(date).week()); return moment(date).week(); }

  const thisWeek = getWeekNumber(new Date());
  const weeksBucket = Array.from({ length: thisWeek }, (a, b) => { return [] });
  memoList.map(memo => weeksBucket[getWeekNumber(memo.date) - 1].push(memo));

  const memoListView = weeksBucket.map((memosInWeek, weekNumber) => {
    return <li key={weekNumber + 1}>Week {weekNumber + 1}<ul>
      {memosInWeek.map(memo => <li key={memo.id}><Memo memo={memo} /></li>)}
    </ul></li>
  }).reverse()

  return (
    <ul>
      {memoListView}
    </ul>
  );
}

export default MemoList;