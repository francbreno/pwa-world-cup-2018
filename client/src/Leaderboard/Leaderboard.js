import React from 'react';

import Container from 'app/components/Container';
import Card from 'app/components/Card';
import Group from './Group';

import './Leaderboard.css';

class Leaderboard extends React.Component {

  state = {
    groups: []
  }

  componentDidMount() {
    fetch(`https://worldcup.sfg.io/teams/group_results`)
      .then(response => console.log(response.clone().json()) || response.json())
      .then(groups => this.setState(() => ({ groups })))
  }

  render() {
    const { groups } = this.state;
    return (
      <section className="section">
        <Container>
          <h1 className="title">Leaderboard</h1>
          {groups.map(group => <Group key={group.id} group={group} />)}
        </Container>
      </section>
    );
  }
}

export default Leaderboard;