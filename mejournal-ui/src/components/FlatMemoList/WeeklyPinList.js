import React from "react";
import BaseList from "./BaseList";
import MessageBox from "./MessageBox";

const WeeklyPinList = ({
  memoList,
  onMemoFormSubmit,
  onPinChanged,
  onDeleted,
}) => {
  const getGroupKey = (date) => date.year() + " " + date.isoWeek();
  const getTitle = (date) => date.isoWeek() + ".Week of " + date.year();
  const pinnedMemos = memoList.filter((memo) => memo.weeklyHighlight);

  if (pinnedMemos.length === 0) {
    return <MessageBox message="No memo is weekly pinned" />;
  }

  return (
    <BaseList
      memoList={pinnedMemos}
      getGroupKey={getGroupKey}
      getTitle={getTitle}
      onMemoFormSubmit={onMemoFormSubmit}
      onDeleted={onDeleted}
      onPinChanged={onPinChanged}
    />
  );
};

export default WeeklyPinList;
