import React from 'react';
import { Link } from 'react-router-dom';

import PopupMenu from './PopupMenu';
import Container from 'components/Container';

import './Toolbar.css';
import Logo from 'img/brand.png';

export default class Toolbar extends React.Component {

  state = {
    activeMenu: false,
  }

  handleOpenMenu = event => this.setState((prevState) => ({
    activeMenu: !prevState.activeMenu,
  }))

  render() {
    const { activeMenu } = this.state;
    const activeMenuStyleClass = activeMenu ? 'is-active' : '';
    const burgerMenuStyleClasses = `navbar-burger burger ${activeMenuStyleClass}`;
    return (
      <nav className="navbar is-fixed-top is-link" role="navigation" aria-label="main navigation">
        <Container fluid>
          <div className="navbar-brand">
            <span className="navbar-item" href="#">
              <img src={Logo} alt='PWA World Cup Russia 2018' height="56" />
            </span>
    
            <span className={burgerMenuStyleClasses} data-target="navMenu" onClick={this.handleOpenMenu}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          
          <PopupMenu
            onMenuClick={this.handleOpenMenu}
            active={activeMenu}
          />
        </Container>
      </nav>
    );
  }
}