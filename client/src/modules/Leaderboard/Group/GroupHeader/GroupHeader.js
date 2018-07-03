import React from 'react';

import './GroupHeader.css';

const GroupHeader = ({ groupLetter }) => (
  <div className="group-header has-text-white">
    <span>Group {groupLetter}</span>
    <span>GP</span>
    <span>W</span>
    <span>D</span>
    <span>L</span>
    <span>GF</span>
    <span>GA</span>
    <span>GD</span>
    <span>P</span>
  </div>
);

export default GroupHeader;