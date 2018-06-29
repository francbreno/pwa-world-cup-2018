import React from 'react';

import './LiveMatches.css';

import MatchFixture from 'app/Matches/MatchFixture';

class LiveMatches extends React.Component {
  state = {
    matches: [],
  }

  timer = null;

  componentDidMount() {
    this.getCurrentMatches();

    this.timer = window.setInterval(
      this.getCurrentMatches, 
      65 * 1000
    );
  }

  getCurrentMatches = () => {
    return fetch('https://worldcup.sfg.io/matches/current')
      .then(response => response.json())
      .then(matches => 
        matches.filter(match => {
          return !(
            match.home_team.code === 'TBD'
            || match.away_team.code === 'TBD'
          );
        })
      )
      .then(matches =>
        this.setState(() => ({
          matches
        }))
      );
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { matches } = this.state;
    return (
      matches.map(match => (
        <MatchFixture
          showStatistics 
          key={match.fifa_id} 
          match={match}
          compactScore />
        )
      )
    );
  }
}

export default LiveMatches;