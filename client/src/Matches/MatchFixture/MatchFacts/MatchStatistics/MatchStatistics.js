import React from 'react';

import './MatchStatistics.css';

import StringHelper from 'app/helpers/string';

const IGNORED_STAT_KEYS = [
  'country',
  'starting_eleven',
  'substitutes',
  'tactics',
];

const MatchStatistics = ({
  show = false,
  homeTeamStatistics,
  awayTeamStatistics
}) => (
  show && <div className="match-statistics has-background-black has-text-white">
    <span>Statistics</span>
      {homeTeamStatistics && Object.keys(homeTeamStatistics)
        .filter(key => !(IGNORED_STAT_KEYS.includes(key)))
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