import React from 'react';
import { Link } from 'react-router-dom';

import './PopupMenu.css';

const Links = ({ onClick, mobile }) => {
  const linksColor = mobile ? 'has-text-link' : 'has-text-white';
  const visibilityStyleClasses = mobile ? 'is-hidden-desktop' : 'is-hidden-mobile';
  const styleClasses = `navbar-item ${linksColor} ${visibilityStyleClasses}`;
  return (
    <div className="navbar-end align-menu-right">
      <Link onClick={onClick} className={styleClasses} to="/">Today</Link>
      <Link onClick={onClick} className={styleClasses} to="/leaderboard">Leaderboard</Link>
      <Link onClick={onClick} className={styleClasses} to="/matches">All Matches</Link>
    </div>
  );
}

const PopupMenu = ({ onMenuClick, active }) => {
  const activeStyleClass = active ? 'is-active' : '';
  const navbarMenuStyleClasses = `navbar-menu full-screen ${activeStyleClass}`; 
  return (
    <div className={navbarMenuStyleClasses}>
      <Links onClick={onMenuClick} mobile />
      <Links onClick={onMenuClick} />
    </div>
  )
};

export default PopupMenu;