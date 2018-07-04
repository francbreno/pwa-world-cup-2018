import React from 'react';

import './MatchLocation.css';

import DateHelper from 'app/helpers/date';

const MatchLocation = ({ stage, venue, location, datetime, weather }) => (
  <div className="match-location card-header-title is-centered has-text-white">
    <span>{stage} {location} ({venue})</span>
    <span>{DateHelper.formatToMatchScore(new Date(datetime))}</span>
    {weather && <span>{weather.temp_celsius}℃ - {weather.description}</span>}
  </div>
);

export default MatchLocation;