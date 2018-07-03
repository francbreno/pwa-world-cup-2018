import React from 'react';

const StageTab = ({stage, active, onClick}) => (
  <li className={active ? 'is-active' : ''}>
    <a><span onClick={() => onClick(stage)}>{stage}</span></a>
  </li>
);

export default StageTab;