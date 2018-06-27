import React from 'react';

import './MatchLocation.css';

import DateHelper from 'app/helpers/date';

const MatchLocation = ({ venue, location, datetime }) => (
  <div className="match-location card-header-title is-centered has-text-white">
    <span>{location}</span>
    <span>({venue})</span>
    <span>{DateHelper.toHoursAndMinutes(new Date(datetime))}</span>
  </div>
);

export default MatchLocation;