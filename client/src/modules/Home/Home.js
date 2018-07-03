import React from 'react';

import './Home.css';

import Container from 'components/Container';
import TodayMatches from 'modules/TodayMatches';
import LiveMatches from 'modules/LiveMatches';

const Home = () => (
  <section className="section">
    <Container>
      <div className="columns inverse-on-mobile">
        <div className="column is-half">
          <TodayMatches />
        </div>
        <div className="column is-half">
          <LiveMatches />
        </div>
      </div>
    </Container>
  </section>
);

export default Home;