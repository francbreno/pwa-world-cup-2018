import React from 'react';

import Event from 'app/Matches/MatchFixture/TeamEvents/Event';

const TeamEvents = ({ events = [], awayTeam = false }) => 
  events.map(event => 
    <Event 
      key={event.id}
      name={event.type_of_event}
      time={event.time}
      player={event.player}
      awayTeam={awayTeam}
    />
  );

  export default TeamEvents;