import React from 'react';

import './LiveMatches.css';

import Container from 'components/Container';
import Timer from 'components/Timer';
import MatchFixture from 'components/MatchFixture';
import MatchesLoader from 'modules/MatchesLoader';

class LiveMatches extends React.Component {
  render() {
    const wait = 65 * 1000;
    return (
      <React.Fragment>
        <h1 className="title">Live Match</h1>
        <MatchesLoader filter="current" tickTime={65 * 1000}>
        {({ matches }) => 
          matches.map(match => 
            <MatchFixture
              key={match.fifa_id}
              cupMatch={match}
              showStatistics
              compactScore
            />
          )
        }
        </MatchesLoader>
      </React.Fragment>
    );
  }
}

export default LiveMatches;