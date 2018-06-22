import React from 'react';

import './MatchTime';

const MatchTime = ({ time }) => (
  <div className="match-time has-background-black has-text-white">
    <span>{time}</span>
  </div>
);

export default MatchTime;