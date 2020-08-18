import React from 'react';
import Memo from '../Memo';

const pinnedView = ({ pinnedItems }) => {

  const pinnedItemsView = pinnedItems && pinnedItems.map(
    memo => <li key={memo.id}>Fav: <Memo memo={memo} /></li>)

  return (pinnedItems && pinnedItems.length == 0 ? null : <div>
    <ul>
      {pinnedItemsView}
    </ul>
  </div>
  );
}

export default pinnedView;