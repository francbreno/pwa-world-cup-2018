import React from 'react';

import './Team.css';

import CountryFlag from 'components/CountryFlag';

const Name = ({ name, code, away }) => {
  const classAlignRight = away ? 'team-align-right' : '';
  const classNames = `team-name ${classAlignRight}`;
  const classNamesShowInMobile = `${classNames} is-hidden-tablet`;
  const classNamesShowInTablet = `${classNames} is-hidden-mobile`;

  return (
    <React.Fragment>
      <span className={classNamesShowInMobile}>{code}</span>
      <span className={classNamesShowInTablet}>{name}</span>
    </React.Fragment>
  );
}

const Flag = ({ name }) => <CountryFlag name={name} />;

const Team = ({ team, away = false, compact = false }) => (
    <div className="match-team">
      {away ? (
        <React.Fragment>
          <Name name={team.country} code={team.code} away />
          <Flag name={team.country} />
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <Flag name={team.country} />
          <Name name={team.country} code={team.code} />
        </React.Fragment>
      )}
    </div>
  );

export default Team;