import React from 'react';

import './Home.css';

import Container from 'components/Container';
import Matches from 'modules/Matches';
import LiveMatches from 'modules/LiveMatches';

const Home = () => (
    <div className="columns inverse-on-mobile">
      <div className="column">
        <section className="section">
          <Container>
            <h1 className="title">Today's Matches</h1>
            <Matches today />
          </Container>
        </section>
      </div>
      <div className="column is-one-quarter is-centered">
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