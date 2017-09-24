import five from 'johnny-five';
import PropTypes from 'prop-types';
import React from 'react';

export default class Board extends React.Component {
  static childContextTypes = { board: PropTypes.object };
  state = {
    ready: false
  }

  getChildContext() {
    return { board: this.board };
  }

  componentWillMount() {
    const board = new five.Board(this.props.config);
    board.on('ready', () => {
      this.setState({ ready: true });
    });
    this.board = board;
  }

  componentWillUnmount() {
    this.board.disconnect();
  }

  render() {
    return (this.state.ready && this.props.children);
  }
}
