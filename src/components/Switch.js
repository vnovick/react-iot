import React from 'react';
import PropTypes from 'prop-types';
import five from 'johnny-five';

export default class Switch extends React.Component {

  static contextTypes = {
    board: PropTypes.object
  };

  componentWillMount(){
    const { pin } = this.props;
    const button = new five.Switch(pin);
    button.on('open', function(button) {
      console.log("open")
    });
    button.on('hit', function(button) {
      console.log("hit")
    });
    button.on('down', function(button) {
      console.log("down")
    });
    button.on('up', function(button) {
      console.log("up")
    });
  }

  render(){
    return false;
  }
}
