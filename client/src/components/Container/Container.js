import React from 'react';

import './Container.css';

const Container = ({ children, fluid }) => (
  <div className={`container ${fluid ? 'is-fluid' : ''}`}>
    {children}
  </div>
);

export default Container;