import React from 'react';

import './MatchFacts.css';

import MatchEvents from 'app/Matches/MatchFixture/MatchEvents';
import MatchStatistics from 'app/Matches/MatchFixture/MatchStatistics';

const MatchFacts = ({
  currentTime, homeTeamStatistics, homeTeamEvents,
  awayTeamStatistics, awayTeamEvents,
  showTime = false, showEvents = false, showStatistics = false
}) => (
  <div className="match-facts">
    <MatchEvents
      homeTeamEvents={homeTeamEvents}
      awayTeamEvents={awayTeamEvents}
      visible={showEvents}
    />
    <MatchStatistics
      show={showStatistics}
      homeTeamStatistics={homeTeamStatistics}
      awayTeamStatistics={awayTeamStatistics}
      visible={showStatistics}
    />
  </div>
);

export default MatchFacts;