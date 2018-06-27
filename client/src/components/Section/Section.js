import React from 'react';

import SectionTitle from './SectionTitle';
import './Section.css';

const Section = ({ title, subtitle }) => (
  <section class="hero is-primary">
    {children}
  </section>
);
