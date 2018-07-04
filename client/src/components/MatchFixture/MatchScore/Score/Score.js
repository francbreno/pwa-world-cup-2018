import React from 'react';

import './Score.css';

const Score = ({ 
  homeGoals, awayGoals, status, color = 'black', textColor = 'white' }) =>
(
  <div className="score has-background-danger has-text-white">
    {
      status === 'future'
      ? <span>vs</span>
      : (
        <React.Fragment>
          <span>{homeGoals}</span>
          <span>-</span>
          <span>{awayGoals}</span>
        </React.Fragment>
      )
    }
  </div>
);

export default Score;