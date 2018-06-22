import React from 'react';

import './MatchStatistics.css';

const MatchStatistics = ({
  show = false,
  homeTeamStatistics,
  awayTeamStatistics
}) => (
  show && <div className="match-statistics has-background-black has-text-white">
    <span>Statistics</span>
      {Object.keys(homeTeamStatistics)
        .filter(key => key !== 'country')
        .map(key => (
        <div key={key}>
          <span>{homeTeamStatistics[key]}</span>
          <span>{StringHelper.formatStatsKeyName(key)}</span>
          <span>{awayTeamStatistics[key]}</span>
        </div>
      ))}
  </div>
);

export default MatchStatistics;