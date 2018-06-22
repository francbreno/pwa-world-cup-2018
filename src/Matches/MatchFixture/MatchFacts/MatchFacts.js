import React from 'react';

import './MatchFacts.css';

import MatchTime from 'app/Matches/MatchFixture/MatchTime';
import MatchEvents from 'app/Matches/MatchFixture/MatchEvents';
import MatchStatistics from 'app/Matches/MatchFixture/MatchStatistics';

const MatchFacts = ({
  currentTime, homeTeamStatistics, homeTeamEvents,
  awayTeamStatistics, awayTeamEvents, showStatistics = false
}) => (
  <div className="match-facts">
    <MatchTime
      time={currentTime}
    />
    <MatchEvents
      homeTeamEvents={homeTeamEvents}
      awayTeamEvents={awayTeamEvents}
    />
    <MatchStatistics
      show={showStatistics}
      homeTeamStatistics={homeTeamStatistics}
      awayTeamStatistics={awayTeamStatistics}
    />
  </div>
);

export default MatchFacts;