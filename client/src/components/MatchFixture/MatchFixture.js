import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import StringHelper from 'app/helpers/string';

import Card from 'components/Card';
import MatchLocation from './MatchLocation';
import MatchScore from './MatchScore';
import PenaltiesScore from './PenaltiesScore';
import MatchFacts from './MatchFacts';
import MatchTime from './MatchTime';

import './MatchFixture.css';

const showPenaltiesScore = (matchStatus, homeGoals, awayGoals) => {
  const goals = homeGoals + awayGoals;
  return matchStatus && (
    matchStatus.toLocaleLowerCase() === 'penalties'
    || goals > 0
  );
};

const MatchFixture = ({ match, cupMatch, showStatistics, showEvents, showTime, compact = false, compactScore = false }) => (
  <React.Fragment>
    <Card
      header={() => (
        <React.Fragment>
          <MatchLocation
            stage={cupMatch.stage}
            venue={cupMatch.venue}
            location={cupMatch.location}
            datetime={cupMatch.datetime}
            weather={cupMatch.weather}
          />
          <Link to={`${match.url}/${cupMatch.fifa_id}`}>Match Details</Link>
        </React.Fragment>
      )}

      content={() => (
        <React.Fragment>
          <MatchTime
            time={cupMatch.time}
            visible
          />
          <MatchScore
            compact={compactScore}
            homeTeam={cupMatch.home_team}
            awayTeam={cupMatch.away_team}
            matchStatus={match.status}
          />
          {showPenaltiesScore(cupMatch.status, cupMatch.home_team.penalties, cupMatch.away_team.penalties) && 
            <PenaltiesScore
              homeTeam={cupMatch.home_team}
              awayTeam={cupMatch.away_team}
            />
          }
        </React.Fragment>
      )}

      footer={() => {
        return !(compact || cupMatch.status === 'future') ?
          <MatchFacts
            showStatistics={showStatistics}
            showEvents={showEvents}
            showTime={showTime}
            currentTime={cupMatch.time}
            homeTeamStatistics={cupMatch.home_team_statistics}
            homeTeamEvents={cupMatch.home_team_events}
            awayTeamStatistics={cupMatch.away_team_statistics}
            awayTeamEvents={cupMatch.away_team_events}
          />
          : null
        }
      }
    />
    <br />
  </React.Fragment>
);

export default withRouter(MatchFixture);