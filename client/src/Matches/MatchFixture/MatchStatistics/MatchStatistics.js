import React from 'react';

import './MatchStatistics.css';

import StringHelper from 'app/helpers/string';

const MatchStatistics = ({
  show = false,
  homeTeamStatistics,
  awayTeamStatistics
}) => (
  show && <div className="match-statistics has-background-black has-text-white">
    <span>Statistics</span>
      {homeTeamStatistics && Object.keys(homeTeamStatistics)
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