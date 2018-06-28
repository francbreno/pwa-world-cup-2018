import React from 'react';

import './MatchFacts.css';

import MatchEvents from './MatchEvents';
import MatchStatistics from './MatchStatistics';
import Formations from './Formations';


const MatchFacts = ({
  currentTime, homeTeamStatistics, homeTeamEvents,
  awayTeamStatistics, awayTeamEvents,
  showEvents = false, showStatistics = false
}) => (
  <div className="match-facts">
    {showStatistics && homeTeamStatistics && awayTeamStatistics
      && <Formations
          homeFormation={homeTeamStatistics.tactics}
          awayFormation={awayTeamStatistics.tactics}
        />
    }
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