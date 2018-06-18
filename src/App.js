import React from 'react';

import Toolbar from './layout/Toolbar';
import Container from './layout/Container';

import './App.css';
import Logo from './pwa-logo.png';
const App = () => (
  <div>
    <Toolbar />
    <Container>
      <p>Welcome to PWA sample app</p>
      <img src={Logo} alt='PWA sample app' />
    </Container>
  </div>
);

export default App;
