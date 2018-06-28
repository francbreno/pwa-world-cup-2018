import React from 'react';

export default class LazyComponent extends React.PureComponent {
  render() {
    const { component: Component } = this.props;
    return (
      null
    );
  }
}