import React from 'react';

import './MatchEvents.css';

import TeamEvents from 'app/Matches/MatchFixture/TeamEvents';

const MatchEvents = ({ homeTeamEvents, awayTeamEvents }) => (
  <div className="match-events">
    <div>
      <TeamEvents events={homeTeamEvents} />
    </div>
    <div>
      <TeamEvents events={awayTeamEvents} awayTeam />
    </div>
  </div>
);

export default MatchEvents;