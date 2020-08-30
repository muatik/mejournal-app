import React, { useState } from 'react';

const NavTab = ({ tabs, entryTab, className }) => {

  const [activeTab, setActiveTab] = useState(entryTab)
  const activeTabContent = tabs.find(tab => tab.title === activeTab).target;

  const onTabClicked = (tab) => setActiveTab(tab.title);

  const generateTab = (tab) => <li className="nav-item">
    <a
      className={"nav-link " + (activeTab === tab.title && " active")}
      href="#"
      onClick={() => onTabClicked(tab)}>{tab.title}</a>
  </li>;

  return (<div className={className}>

    <ul className="nav nav-tabs">
      {tabs.map(generateTab)}
    </ul>

    <div className="tab-content">
      <div className="tab-pane fade show active" role="tabpanel">
        {activeTabContent}
      </div>
    </div>
  </div>
  );
}

export default NavTab;