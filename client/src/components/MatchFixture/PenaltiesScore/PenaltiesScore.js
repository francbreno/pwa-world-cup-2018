import React from 'react';

import './PenaltiesScore.css';

const PenaltiesScore = ({ homeTeam, awayTeam }) => (
  <div className="penalties-score">
    <span>Penalties</span>
    <div>
      <span>{homeTeam.penalties}</span>
      <span>-</span>
      <span>{awayTeam.penalties}</span>
    </div>
  </div>
);

export default PenaltiesScore;