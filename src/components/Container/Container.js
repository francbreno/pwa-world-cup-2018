import React from 'react';

import './Container.css';

const Container = ({ children }) => (
  <div className="container is-fluid">
    {children}
  </div>
);

export default Container;