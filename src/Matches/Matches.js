import React from 'react';

import MatchFixture from './MatchFixture';

import './Matches.css';

class Matches extends React.Component {
  state = {
    matches: []
  };

  componentDidMount() {
    fetch('http://worldcup.sfg.io/matches/today')
      .then(response => response.json())
      .then(matches => matches.filter(match => {
        return !(
          match.home_team.code === 'TBD'
          || match.away_team.code === 'TBD'
        );
      }))
      .then(matches =>
        this.setState(() => ({
          matches
        }))
      );
  }

  render() {
    const { matches } = this.state;
    return (
      <div className="matches">
        {matches.map(match => <MatchFixture key={match.fifa_id} match={match} />)}
      </div>
    );
  }
}

export default Matches;