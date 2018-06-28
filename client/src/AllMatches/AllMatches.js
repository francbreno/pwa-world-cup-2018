import React from 'react';

import Container from 'components/Container';
import Matches from 'app/Matches';

import './AllMatches.css';

const AllMatches = () => (
  <section className="section">
    <Container>
      <h1 className="title">All Matches</h1>
      <Matches compact />
    </Container>
  </section>
);

export default AllMatches;