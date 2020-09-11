/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import BaseList from "./BaseList";

const DayList = ({ memoList, onMemoFormSubmit, onPinChanged, onDeleted }) => {
  const getGroupKey = (date) => date.format("YYYY-MM-DD");
  const getTitle = (date) => date.format("dddd, Do MMM YYYY");

  const now = moment();
  const hideEmptyDays = true;
  const groupFilter = (group) => {
    const inThisWeek = now.diff(group.date, "days") < 7;
    if (inThisWeek || (hideEmptyDays && group.items.length > 0)) {
      return group;
    }
  };

  const formVisibilityMapper = (group) => {
    const inThisWeek = now.diff(group.date, "days") < 7;
    return inThisWeek;
  };

  return (
    <BaseList
      memoList={memoList}
      groupFilter={groupFilter}
      getGroupKey={getGroupKey}
      getTitle={getTitle}
      formVisibilityMapper={formVisibilityMapper}
      onMemoFormSubmit={onMemoFormSubmit}
      onDeleted={onDeleted}
      onPinChanged={onPinChanged}
    />
  );
};

export default DayList;
