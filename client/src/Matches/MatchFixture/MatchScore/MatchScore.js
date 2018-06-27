import React from 'react';

import './MatchScore.css';

import Team from 'app/components/Team';
import Score from './Score';

const MatchScore = ({ homeTeam, awayTeam, matchStatus = 'future' }) => (
  <div className="match-score">
    <Team team={homeTeam} />
    <Score homeGoals={homeTeam.goals} awayGoals={awayTeam.goals} status={matchStatus} />
    <Team team={awayTeam} away />
  </div>
);

export default MatchScore;