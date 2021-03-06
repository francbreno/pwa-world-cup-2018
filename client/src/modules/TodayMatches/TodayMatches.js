import React from 'react';

import Container from 'components/Container';
import MatchesLoader from 'modules/MatchesLoader';
import MatchFixture from 'components/MatchFixture';

const TodayMatches = () => (
  <React.Fragment>
    <h1 className="title">Today Matches</h1>
    <MatchesLoader filter="today">
      {({ matches }) => 
        matches.map(match => 
          <MatchFixture key={match.fifa_id} cupMatch={match} />
        )
      }
    </MatchesLoader>
  </React.Fragment>
);

export default TodayMatches;