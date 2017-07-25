import React from 'react';
import PropTypes from 'prop-types';
import five from 'johnny-five';


const validEvents = [
  'press', 'hit', 'up', 'down', 'release'
]


export default class Button extends React.Component {

  static contextTypes = {
    board: PropTypes.object
  };

  componentWillMount(){
    const { pin, invert, isPullup } = this.props;
    this.button = new five.Button({
      pin,
      isPullup,
      invert
    });
    this.setButtonEvents(this.props);
  }

  setButtonEvents(props){
    this.eventMap = validEvents.reduce((acc, eventName) => {
      const propName = `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;
      if (props[propName]) {
        return [
          ...acc,
          {
            eventName,
            cb: props[propName]
          }
        ]
      }
      return acc
    }, [])
    this.eventMap && this.eventMap.forEach(({ eventName, cb }) => {
      this.button.on(eventName, cb)
    })
  }

  clearButtonEvents(){
    const pin = new five.Pin(this.props.pin);
    pin.low();
    console.log(this.button);
    this.button = null;
  }

  componentWillUnmount(){
    console.log(`unmount button at pin ${this.props.pin}`)
    this.clearButtonEvents();
  }


  render(){
    return false;
  }
}
