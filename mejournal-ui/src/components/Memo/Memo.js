import React from 'react';

const PinIcon = ({ status, letter, onClick }) => {
  const className = status === true ? "active" : ""
  return (
    <i className={"pinIcon " + className} onClick={onClick}>{letter}</i>
  )
}

const Memo = ({ memo, onPinChanged }) => {
  const toggleMonthlyPin = (memo) => {
    onPinChanged(memo, {
      'monthlyHighlight': !memo.monthlyHighlight,
      'weeklyHighlight': memo.weeklyHighlight
    })
  }

  const toggleWeeklyPin = (memo) => {
    onPinChanged(memo, {
      'monthlyHighlight': memo.monthlyHighlight,
      'weeklyHighlight': !memo.weeklyHighlight
    })
  }

  return (<li>
    <PinIcon
      status={memo.monthlyHighlight}
      letter="M"
      onClick={() => { toggleMonthlyPin(memo) }}
    />
    <PinIcon
      status={memo.weeklyHighlight}
      letter="W"
      onClick={() => { toggleWeeklyPin(memo) }} />
    Text: {memo.text}
  </li>);
}

export default Memo;