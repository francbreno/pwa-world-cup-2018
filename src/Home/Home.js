import React from 'react';

import Container from '../components/Container';
import Matches from '../Matches';
import LiveMatches from '../Matches/LiveMatches';

const Home = () => (
    <div className="columns">
      <div className="column is-two-thirds">
        <section className="section">
          <Container>
            <h1 className="title">Today's Matches</h1>
            <Matches />
          </Container>
        </section>
      </div>
      <div className="column is-centered">
        <section className="section">
          <Container>
          <h1 className="title">Live Match</h1>
            <LiveMatches />
          </Container>
        </section>
      </div>
    </div>
);

export default Home;