import React from 'react';

import StringHelper from 'app/helpers/string';
import DateHelper from 'app/helpers/date';

import './MatchFixture.css';

const MatchTime = ({ time }) => (
  <div className="match-time has-background-black has-text-white">
    <span>{time}</span>
  </div>
);

const Image = ({ path }) => (
  <img src={path} />
);

const CountryFlag = ({ name }) => (
  <Image path={require(`img/flags/${StringHelper.capitalize(name).replace(' ', '_')}.gif`)} />
);

const MatchTeam = ({ name, away = false }) => (
  <div className="match-team">
    {away ?
      (
        <React.Fragment>
          <span className="team-name">{name}</span>
          <CountryFlag name={name} />
        </React.Fragment>
      )
      :
      (
        <React.Fragment>
          <CountryFlag name={name} />
          <span className="team-name">{name}</span>
        </React.Fragment>
      )
    }
  </div>
);

const Score = ({ homeGoals, awayGoals, status, color = 'black', textColor = 'white' }) => (
  <div className="score" style={{color: textColor, backgroundColor: color}}>
    {
      status === 'future'
      ? <span>vs</span>
      : (
        <React.Fragment>
          <span>{homeGoals}</span>
          <span>-</span>
          <span>{awayGoals}</span>
        </React.Fragment>
      )
    }
  </div>
);

const MatchScore = ({ homeTeam, awayTeam, matchStatus = 'future' }) => (
  <div className="match-score">
    <MatchTeam name={homeTeam.country} />
    <Score homeGoals={homeTeam.goals} awayGoals={awayTeam.goals} status={matchStatus} />
    <MatchTeam name={awayTeam.country} away />
  </div>
);

const EventIcon = ({ eventName }) => (
  <Image path={require(`img/events/${eventName}.png`)} />
)

const Event = ({ name, time, player, awayTeam = false }) => {
  const rightToLeftStyle = awayTeam ? 'event-align-right' : '';
  const styleClasses = `event ${rightToLeftStyle}`;

  return (
  <div className={styleClasses}>
    {awayTeam ? 
      (
        <React.Fragment>
          <span>{player}</span>
          <span>{time}</span>
          <EventIcon eventName={name} />
        </React.Fragment>
      )
      :
      (
        <React.Fragment>
          <EventIcon eventName={name} />
          <span>{time}</span>
          <span>{player}</span>
        </React.Fragment>
      )
    }
  </div>
  );
}

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

const TeamEvents = ({ events, awayTeam = false }) => 
  events.map(event => 
    <Event 
      key={event.id}
      name={event.type_of_event}
      time={event.time}
      player={event.player}
      awayTeam={awayTeam}
    />
  );

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

const MatchStatistics = ({
  show = false,
  homeTeamStatistics,
  awayTeamStatistics
}) => (
  show && <div className="match-statistics has-background-black has-text-white">
    <span>Statistics</span>
      {Object.keys(homeTeamStatistics)
        .filter(key => key !== 'country')
        .map(key => (
        <div key={key}>
          <span>{homeTeamStatistics[key]}</span>
          <span>{StringHelper.formatStatsKeyName(key)}</span>
          <span>{awayTeamStatistics[key]}</span>
        </div>
      ))}
  </div>
);

const MatchLocation = ({ venue, location, datetime }) => (
  <div className="match-location">
    <span>{location}</span>
    <span>({venue})</span>
    <span>{DateHelper.toHoursAndMinutes(new Date(datetime))}</span>
  </div>
);

const MatchFixture = ({ match, showStatistics }) => (
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
    <footer className="card-footer">
      <MatchFacts
        showStatistics={showStatistics}
        currentTime={match.time}
        homeTeamStatistics={match.home_team_statistics}
        homeTeamEvents={match.home_team_events}
        awayTeamStatistics={match.away_team_statistics}
        awayTeamEvents={match.away_team_events}
      />
    </footer>
  </div>
  <br />
  </React.Fragment>
);

export default MatchFixture;