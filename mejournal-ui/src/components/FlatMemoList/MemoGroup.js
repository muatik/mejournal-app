import React from "react";
import Memo from "../Memo/Memo";
import MemoForm from "../MemoForm";

const MemoGroup = ({
  group,
  getTitle,
  isFormVisible,
  onMemoFormSubmit,
  onPinChanged,
  onDeleted,
}) => {
  const memoViews = group.items.map((memo) => (
    <Memo
      key={memo.id}
      memo={memo}
      onDeleted={onDeleted}
      onPinChanged={onPinChanged}
    />
  ));

  const form = (
    <MemoForm date={group.date} onMemoFormSubmit={onMemoFormSubmit} />
  );

  return (
    <li>
      <h5 className="title">{getTitle(group.date)}</h5>
      <ul className="memoList">{memoViews}</ul>
      {isFormVisible && form}
    </li>
  );
};

export default MemoGroup;
