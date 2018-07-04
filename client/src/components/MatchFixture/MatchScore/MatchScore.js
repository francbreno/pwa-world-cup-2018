import React from 'react';

import './MatchScore.css';

import Team from 'components/Team';
import Score from './Score';

const MatchScore = ({ homeTeam, awayTeam, matchStatus = 'future', compact = false }) => (
  <div className="match-score">
    <Team team={homeTeam} compact={compact} />
    <Score 
      homeGoals={homeTeam.goals}
      awayGoals={awayTeam.goals}
      homePKGoals={homeTeam.penalties}
      awayPKGoals={awayTeam.penalties}
      status={matchStatus} />
    <Team team={awayTeam} compact={compact} away />
  </div>
);

export default MatchScore;