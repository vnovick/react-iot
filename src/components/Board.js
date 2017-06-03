import React from 'react';
import PropTypes from 'prop-types';
const five = require('johnny-five');


class boardBrowserMock {
  constructor(config){
    this.config = config;
  }

  on(name, callback) {
    setTimeout(() => {
      console.log(name);
      callback();
    },1000)
  }
}


export default class Board extends React.Component {

  state = {
    ready: false
  }

  static childContextTypes = {
    board: PropTypes.object
  };

  getChildContext() {
    return {
      board: this.board
    };
  }

  componentWillMount(){
    let { config, platform } = this.props;
    const board = new five.Board(config)
    board.on('ready', () => {
      this.setState({
        ready: true
      })
    })
    this.board = board;
  }

  componentWillUnmount(){
    this.board.disconnect();
  }

  render(){
    return (
      this.state.ready && this.props.children
    )
  }
}
