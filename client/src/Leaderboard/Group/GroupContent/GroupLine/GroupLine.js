import React from 'react';

import Team from 'app/components/Team';

import './GroupLine.css'

const GroupLine = ({ team }) => (
  <div className="group-line">
    <Team team={team} />
    <span>{team.games_played}</span>
    <span>{team.wins}</span>
    <span>{team.draws}</span>
    <span>{team.losses}</span>
    <span>{team.goals_for}</span>
    <span>{team.goals_against}</span>
    <span>{team.goal_differential}</span>
    <span>{team.points}</span>
  </div>
);

export default GroupLine;