import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toolbar from 'app/components/Toolbar';
import Container from 'app/components/Container';
import Home from 'app/Home';
import AllMatches from 'app/AllMatches';
import Leaderboard from 'app/Leaderboard';

import './App.css';
import Logo from './pwa-logo.png';

const App = () => (
  <Router>
    <div>
      <Toolbar />
      <Route path="/" component={Home} exact />
      <Route path="/matches" component={AllMatches} />
      <Route path="/leaderboard" component={Leaderboard} />
    </div>
  </Router>
);

export default App;
