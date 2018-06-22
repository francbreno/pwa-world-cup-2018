import React from 'react';

import './SectionTitle.css';

const SectionTitle = ({ title, subtitle }) => (
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {title}
      </h1>
      <h2 class="subtitle">
        {subtitle}
      </h2>
    </div>
  </div>
);

export default SectionTitle;