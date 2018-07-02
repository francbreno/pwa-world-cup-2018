import React from 'react';

import ArrayUtil from 'helpers/array';

import MatchFixture from 'components/MatchFixture';
import Message from 'components/Message';

import './Matches.css';

class Matches extends React.Component {
  state = {
    matches: []
  };

  componentDidMount() {
    const { today } = this.props;
    const todayFilter = today ? 'today': '';
    fetch(`https://worldcup.sfg.io/matches/${todayFilter}`)
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
    const { compact } = this.props;
    const hasMatches =  Array.isArray(matches) && matches.length > 0;
    return (
      <div className="matches">
        {hasMatches && matches.map(match => <MatchFixture key={match.fifa_id} match={match} compact={compact} />)}
        {!hasMatches && <Message>No matches found</Message>}
      </div>
    );
  }
}

export default Matches;