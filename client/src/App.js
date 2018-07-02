import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toolbar from 'components/Toolbar';
import Container from 'components/Container';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('modules/Home'),
  loading: Loading
});
const AllMatches = Loadable({
  loader: () => import('modules/AllMatches'),
  loading: Loading
});
const Leaderboard = Loadable({
  loader: () => import('modules/Leaderboard'),
  loading: Loading
});

import './App.css';

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
