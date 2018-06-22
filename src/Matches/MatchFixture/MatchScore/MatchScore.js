import React from 'react';

import './MatchScore.css';

import MatchTeam from 'app/Matches/MatchFixture/MatchTeam';
import Score from './Score';

const MatchScore = ({ homeTeam, awayTeam, matchStatus = 'future' }) => (
  <div className="match-score">
    <MatchTeam team={homeTeam} />
    <Score homeGoals={homeTeam.goals} awayGoals={awayTeam.goals} status={matchStatus} />
    <MatchTeam team={awayTeam} away />
  </div>
);

export default MatchScore;