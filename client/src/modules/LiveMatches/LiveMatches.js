import React from 'react';

import './LiveMatches.css';

import Timer from 'components/Timer';
import MatchFixture from 'components/MatchFixture';
import MatchesLoader from 'modules/MatchesLoader';

class LiveMatches extends React.Component {
  render() {
    const wait = 65 * 1000;
    return (
      <Timer waitMinutes={wait}>
        <MatchesLoader filter="current">
        {({ matches }) => 
          matches.map(match => 
            <MatchFixture
              key={match.fifa_id}
              match={match}
              showStatistics
              compactScore
            />
          )
        }
        </MatchesLoader>
      </Timer>
    );
  }
}

export default LiveMatches;