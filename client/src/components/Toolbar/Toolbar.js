import React from 'react';
import { Link } from 'react-router-dom';

import './Toolbar.css';
import Logo from 'img/wc_2018.png';

  // <nav>
  //   <span><img src={Logo} alt='PWA sample app' /></span>
  //   <span><a href="">Home</a></span>
  //   <span>Matches</span>
  //   <span>Leaderboard</span>
  // </nav>
export default class Toolbar extends React.Component {

  state = {
    activeMenu: false,
  }

  handleOpenMenu = event => console.log('hahaah') || this.setState((prevState) => ({
    activeMenu: !prevState.activeMenu,
  }))

  render() {
    const { activeMenu } = this.state;
    const activeMenuStyleClass = activeMenu ? 'is-active' : '';
    const burgerMenuStyleClasses = `navbar-burger burger ${activeMenuStyleClass}`;
    const navbarMenuStyleClasses = `navbar-menu ${activeMenuStyleClass}`;
    return (
      <nav className="navbar is-fixed-top is-link" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src={Logo} alt='PWA World Cup Russia 2018' />
            </a>
    
            <span className={burgerMenuStyleClasses} data-target="navMenu" onClick={this.handleOpenMenu}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          
          <div className={navbarMenuStyleClasses}>
            <div className="navbar-end">
              <Link onClick={this.handleOpenMenu} className="navbar-item has-text-link" to="/">Home</Link>
              <Link onClick={this.handleOpenMenu} className="navbar-item has-text-link" to="/leaderboard">Leaderboard</Link>
              <Link onClick={this.handleOpenMenu} className="navbar-item has-text-link" to="/matches">All Matches</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}