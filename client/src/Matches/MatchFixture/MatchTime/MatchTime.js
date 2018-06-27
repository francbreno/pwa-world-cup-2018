import React from 'react';

import './MatchTime.css';

const MatchTime = ({ time }) => (
  <div className="match-time">
    <span>{time}</span>
  </div>
);

export default MatchTime;