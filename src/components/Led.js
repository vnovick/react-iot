import React from 'react';
import PropTypes from 'prop-types';
import five from 'johnny-five';

export default class Led extends React.Component {
  static contextTypes = { board: PropTypes.object };

  componentWillMount() {
    const { pin, controller } = this.props;
    this.led = new five.Led({pin, controller });
    this.setLedState(this.props.isOn);
    this.context.board.on('exit', () => {
      this.setLedState(false);
    });
  }

  componentDidUpdate(oldProps) {
    if (oldProps.isOn !== this.props.isOn) {
      this.setLedState(this.props.isOn);
    }
  }

  componentWillUnmount() {
    this.led.off();
  }

  setLedState(isOn) {
    if (isOn) {
      this.led.on();
    } else {
      this.led.off();
    }
  }

  render() {
    return false;
  }
}
