import React from 'react';
import Raspi from 'raspi-io';
import { AppRegistry, Board, Led, Button, Container } from 'react-iot';


class App extends React.Component {

  state = {
    isOn: false
  }

  takeOff(){
    this.setState({ isOn: true })
    this.socket.emit('takeoff');
  }

  land(){
    this.setState({ isOn: false })
    this.socket.emit('land');
  }

  componentDidMount(){
    this.socket = require('socket.io-client')('http://localhost:3005');

    this.socket.on('connect', () => {
       console.log('connected');
     });
  }

  render(){
    return (
      <Container>
        <Led pin="P1-13" isOn={this.state.isOn} />
        <Button pin="P1-15" isPullup
          onPress={() => this.takeOff() }
          onRelease={() => this.land() } />
      </Container>
    )
  }
}

class IoTApplication extends React.Component {

  render(){
    return (
      <Board config={{ io: new Raspi() }}>
        <App />
      </Board>
    )
  }
}

AppRegistry.registerComponent('IoTApplication', IoTApplication);
