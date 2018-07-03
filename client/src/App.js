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
const Matches = Loadable({
  loader: () => import('modules/Matches'),
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
      <Switch>
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/matches" component={Matches} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Container>
      </Switch>
    </div>
  </Router>
);

export default App;
