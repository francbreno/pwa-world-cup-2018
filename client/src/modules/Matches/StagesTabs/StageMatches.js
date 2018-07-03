import React from 'react';

import MatchFixture from 'components/MatchFixture';

const StageMatches = ({ stage, matches }) => (
  <React.Fragment>
    <h1 className="title">{stage}</h1>
    {matches.map(match =>
      <MatchFixture key={match.fifa_id} match={match} compact />
    )}
  </React.Fragment>
);

export default StageMatches;