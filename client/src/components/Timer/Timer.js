import React from 'react';

export default class Timer extends React.Component {
  state = {
    minutes: 0,
  }

  componentDidMount() {
    this.interval = setInterval(() => 
      this.setState((prevState) => ({
        minutes: prevState.minutes + 1 
      }) 
    ), this.props.waitMinutes);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state.minutes);
    return this.props.children;
  }
}