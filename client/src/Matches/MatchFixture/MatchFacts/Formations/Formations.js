import React from 'react';

import './Formations.css';

const Formations = ({ homeFormation, awayFormation }) => (
  <div className="formations">
    <span>{homeFormation}</span>
    <span>{awayFormation}</span>
  </div>
);

export default Formations;