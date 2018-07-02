import React from 'react';

import StringHelper from 'app/helpers/string';
import DateHelper from 'app/helpers/date';

import Card from 'components/Card';
import MatchLocation from './MatchLocation';
import MatchScore from './MatchScore';
import MatchFacts from './MatchFacts';
import MatchTime from './MatchTime';

import './MatchFixture.css';

const MatchFixture = ({ match, showStatistics, showEvents, showTime, compact = false, compactScore = false }) => (
  <React.Fragment>
    <Card
      header={() => (
        <MatchLocation
          venue={match.venue}
          location={match.location}
          datetime={match.datetime}
          weather={match.weather}
        />
      )}

      content={() => (
        <React.Fragment>
          <MatchTime
            time={match.time}
            visible
          />
          <MatchScore
            compact={compactScore}
            homeTeam={match.home_team}
            awayTeam={match.away_team}
            matchStatus={match.status}
          />
        </React.Fragment>
      )}

      footer={() => {
        return !(compact || match.status === 'future') ?
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
          : null
        }
      }
    />
    <br />
  </React.Fragment>
);

export default MatchFixture;