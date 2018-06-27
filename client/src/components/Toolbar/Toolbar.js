import React from 'react';
import { Link } from 'react-router-dom';

import './Toolbar.css';
import Logo from '../../pwa-logo.png';

  // <nav>
  //   <span><img src={Logo} alt='PWA sample app' /></span>
  //   <span><a href="">Home</a></span>
  //   <span>Matches</span>
  //   <span>Leaderboard</span>
  // </nav>
const Toolbar = () => (
  <nav className="navbar is-black" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
      <img src={Logo} alt='PWA sample app' />
      </a>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-menu">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/leaderboard">Leaderboard</Link>
      <Link className="navbar-item" to="/matches">All Matches</Link>
    </div>
  </nav>
);

export default Toolbar;