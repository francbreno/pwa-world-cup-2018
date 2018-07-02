import React from 'react';

import Container from 'components/Container';
import MatchesLoader from 'modules/MatchesLoader';
import MatchFixture from 'components/MatchFixture';

const TodayMatches = () => (
  <section className="section">
    <Container>
      <h1 className="title">Today Matches</h1>
      <MatchesLoader filter="today">
        {({ matches }) => 
          matches.map(match => 
            <MatchFixture key={match.fifa_id} match={match} />
          )
        }
      </MatchesLoader>
    </Container>
  </section>
);

export default TodayMatches;