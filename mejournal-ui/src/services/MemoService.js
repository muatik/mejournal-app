import { createInstance as createMemo } from './Memo'
import moment from 'moment';

let memos = [];

const getAll = () => {
  if (memos.length === 0) {
    memos = [
      {
        'id': 1,
        'text': 'the first item',
        'date': moment('2019-12-21')
      },
      {
        'id': 2,
        'text': 'another item',
        'date': moment('2020-02-18')
      },
      {
        'id': 3,
        'text': 'another item',
        'date': moment('2020-07-8')
      },
      {
        'id': 4,
        'text': '4rd item',
        'date': moment('2020-07-10'),
        'weeklyHighlight': true
      },
      {
        'id': 5,
        'text': '5th item',
        'date': moment('2020-07-16'),
        'monthlyHighlight': true
      },
      {
        'id': 6,
        'text': '6th item',
        'date': moment('2020-07-20')
      },
      {
        'id': 7,
        'text': '7th item',
        'date': moment('2020-07-23')
      }
    ];
  }
  console.log('getting all')
  memos = memos.sort((a, b) => a.date.isAfter(b.date) ? -1 : 1);
  return memos;
}

const add = (text, date) => {
  const memo = createMemo(text, date);
  memos.push(memo);
}

const remove = (id) => {
  const newMemos = memos.filter(memo => memo.id !== id);
  memos = newMemos;
}

const changePinState = (id, weeklyHighlight, monthlyHighlight) => {
  const newMemos = memos
    .map(memo => memo.id === id ?
      { ...memo, weeklyHighlight, monthlyHighlight } : memo);
  memos = newMemos;
}

export default { getAll, add, remove, changePinState }
