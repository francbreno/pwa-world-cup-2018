import React from 'react';

import GroupLine from './GroupLine';

import './GroupContent.css';

const GroupContent = ({ group }) => console.log(group) || (
  <div className="group-content">
    {group.ordered_teams
      .map(team => <GroupLine key={team.fifa_code} team={team} />)}
  </div>
);

export default GroupContent;