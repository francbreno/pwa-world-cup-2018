import React from 'react';

export default class Menu extends React.Component {

  state = {
    active: false,
  };

  render() {
    return (
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item has-text-white" to="/">Home</Link>
          <Link className="navbar-item has-text-white" to="/leaderboard">Leaderboard</Link>
          <Link className="navbar-item has-text-white" to="/matches">All Matches</Link>
        </div>
      </div>
    );
  }
}