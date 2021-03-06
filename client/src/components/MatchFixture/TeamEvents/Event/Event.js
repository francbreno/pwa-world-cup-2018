import React from 'react';

import './Event.css';

import Image from 'components/Image';

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
          <EventIcon eventName={name} />
          <span>{time}</span>
          <span>{player}</span>
        </React.Fragment>
      )
      :
      (
        <React.Fragment>
          <span>{player}</span>
          <span>{time}</span>
          <EventIcon eventName={name} />
        </React.Fragment>
      )
    }
  </div>
  );
}

export default Event;