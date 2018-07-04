import React from 'react';

export default class Timer extends React.Component {
  componentDidMount() {
    const { tick, exec } = this.props;
    if(this.props.tick > 0) {
      console.log('interval', tick);
      this.interval = setInterval(exec, tick);
    }
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }

  render() {
    const { children } = this.props;
    return this.props.children;
  }
}