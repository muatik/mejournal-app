import { firestore } from 'firebase';
import { getDb } from '../firebase';

import moment from 'moment';

const deserialize = memo => {
  return {
    id: memo.id,
    text: memo.text,
    date: moment(memo.date.toDate()),
    monthlyHighlight: memo.monthly_highlight,
    weeklyHighlight: memo.weekly_highlight,
  };
};

const serialize = memo => {
  return {
    text: memo.text,
    date: firestore.Timestamp.fromDate(memo.date.toDate()),
    monthly_highlight: memo.monthlyHighlight,
    weekly_highlight: memo.weeklyHighlight,
  };
};

class MemoClient {
  constructor(config) {
    this.config = config;
  }

  getAll(user) {
    return getDb()
      .collection(this._getResourcePath(user))
      .get()
      .then(querySnapshot => {
        const memoList = [];
        if (!querySnapshot || querySnapshot.empty) {
          return memoList;
        }
        querySnapshot.forEach(doc => {
          memoList.push({ ...deserialize(doc.data()), id: doc.id });
        });
        return memoList;
      });
  }

  add(user, memo) {
    return getDb()
      .collection(this._getResourcePath(user))
      .add(serialize(memo))
      .then(docRef => {
        return { ...memo, id: docRef.id };
      });
  }

  update(user, memo) {
    return getDb()
      .collection(this._getResourcePath(user))
      .doc(memo.id)
      .update(serialize(memo));
  }

  delete(user, memo) {
    return getDb()
      .collection(this._getResourcePath(user))
      .doc(memo.id)
      .delete();
  }

  _getResourcePath(user) {
    return `/users/${user}/memos`;
  }
}

export default MemoClient;
