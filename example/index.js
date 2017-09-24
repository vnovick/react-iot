import React from 'react';
import ReactIoT, { Board, Button, Led, Container } from '../src';

class App extends React.Component {
  state = {
    isOn: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isOn: true
      })
    }, 2000);
  }

  render() {
    return (
      <Container>
        <Led pin="13" isOn={this.state.isOn} />
      </Container>
    );
  }
}


ReactIoT.render(
  <Board>
    <App />
  </Board>
);
