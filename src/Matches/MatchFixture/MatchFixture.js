import React from 'react';

import StringHelper from 'app/helpers/string';
import DateHelper from 'app/helpers/date';

import './MatchFixture.css';

import MatchLocation from './MatchLocation';
import MatchScore from './MatchScore';
import MatchFacts from './MatchFacts';

const MatchFixture = ({ match, showStatistics, showEvents, showTime, resumed = false }) => (
  <React.Fragment>
  <div className="card">
    <header className="card-header has-background-black">
      <div className="card-header-title is-centered has-text-white">
        <MatchLocation
          venue={match.venue}
          location={match.location}
          datetime={match.datetime}
        />
      </div>
    </header>
    <div className="card-content">
      <MatchScore
        homeTeam={match.home_team}
        awayTeam={match.away_team}
        matchStatus={match.status}
      />
    </div>
    {!resumed && (
      <footer className="card-footer">
        <MatchFacts
          showStatistics={showStatistics}
          showEvents={showEvents}
          showTime={showTime}
          currentTime={match.time}
          homeTeamStatistics={match.home_team_statistics}
          homeTeamEvents={match.home_team_events}
          awayTeamStatistics={match.away_team_statistics}
          awayTeamEvents={match.away_team_events}
        />
      </footer>
    )}
  </div>
  <br />
  </React.Fragment>
);

export default MatchFixture;