import React from 'react';

import './MatchTeam.css';

import CountryFlag from 'components/CountryFlag';

const MatchTeam = ({ team, away = false }) => {
  return (
    <div className="match-team">
      {away ?
        (
          <React.Fragment>
            <span className="team-name is-hidden-tablet">{team.code}</span>
            <span className="team-name is-hidden-mobile">{team.country}</span>
            <CountryFlag name={team.country} />
          </React.Fragment>
        )
        :
        (
          <React.Fragment>
            <CountryFlag name={team.country} />
            <span className="team-name is-hidden-tablet">{team.code}</span>
            <span className="team-name is-hidden-mobile">{team.country}</span>
          </React.Fragment>
        )
      }
    </div>
  );
}

export default MatchTeam;