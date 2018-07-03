import React from 'react';

import Container from 'components/Container';
import MatchesLoader from 'modules/MatchesLoader';
import MatchFixture from 'components/MatchFixture';

import './AllMatches.css';

const AllMatches = () => (
  <section className="section">
    <Container>
      <h1 className="title">All Matches</h1>
      <MatchesLoader>
        {({ matches }) => 
          matches.map(match => 
            <MatchFixture key={match.fifa_id} match={match} compact />
          )
        }
      </MatchesLoader>
    </Container>
  </section>
);

export default AllMatches;