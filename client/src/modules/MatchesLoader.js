import React from 'react';

import ArrayUtil from 'helpers/array';

import Message from 'components/Message';

const FILTERS = [
  'today',
  'current',
];

const getFilter = name => FILTERS.includes(name) ? name : '';

export default class MatchesLoader extends React.Component {
  state = {
    matches: [],
    waiting: true,
  };

  componentDidMount() {
    const { filter } = this.props;
    fetch(`https://worldcup.sfg.io/matches/${getFilter(filter)}`)
      .then(response => response.json())
      .then(matches => matches.filter(match => {
        return !(
          match.home_team.code === 'TBD'
          || match.away_team.code === 'TBD'
        );
      }))
      .then(matches =>
        this.setState(() => ({
          matches,
          waiting: false,
        }))
      );
  }

  render() {
    const { matches, waiting } = this.state;
    const { compact } = this.props;
    const hasMatches =  Array.isArray(matches) && matches.length > 0;
    return (
      <div className="matches">
        {waiting && <Message type="info">Loading...</Message>}
        {!waiting && !ArrayUtil.isEmpty(matches) && this.props.children(this.state)}
        {!waiting && ArrayUtil.isEmpty(matches) && <Message type="info">no matches</Message>}
      </div>
    );
  }
}
