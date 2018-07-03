import React from 'react';

import Container from 'components/Container';
import MatchesLoader from 'modules/MatchesLoader';
import MatchFixture from 'components/MatchFixture';
import StagesTabs from './StagesTabs';
import StagesHelper from 'helpers/stages';

import './Matches.css';

const groupByStage = (matches) => matches.reduce(
  (acc, curr) => ({ 
    ...acc, 
    [curr.stage_name]: addToStageMatches(acc, curr)
  }), 
  {}
);

const addToStageMatches = (acc, curr) => acc[curr.stage_name] ? 
  [...acc[curr.stage_name], curr]
  : [curr];

const Matches = () => (
  <section className="section">
    <Container>
      <MatchesLoader>
        {/* {({ matches }) => {
          const matchesByStage = groupByStage(matches);
          return Object.keys(matchesByStage).map(stage => 
            <StageMatches 
              key={stage}
              stage={stage}
              matches={matchesByStage[stage]}
            />
          );
        }} */
        }
        {({ matches }) => {
          const matchesByStage = groupByStage(matches);
          const stages = Object.keys(matchesByStage);
          const activeStage = StagesHelper.getStageName('firstStage');
          return (
            <StagesTabs
              stages={stages}
              matches={matchesByStage}
              activeStage={activeStage}
            />
          );
        }}
      </MatchesLoader>
    </Container>
  </section>
);

export default Matches;