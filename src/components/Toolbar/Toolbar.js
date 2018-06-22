import React from 'react';

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
      <a className="navbar-item" href="https://bulma.io">Home</a>
      <a className="navbar-item" href="https://bulma.io">Leaderboard</a>
      <a className="navbar-item" href="https://bulma.io">Matches</a>
    </div>
  </nav>
);

export default Toolbar;