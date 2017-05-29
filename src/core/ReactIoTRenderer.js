import ReactDOM from 'react-dom';


export const DomRenderer = ReactDOM;

export class ReactIoTRenderer {

  constructor(config){
    this.config = config;
  }

  config = {

  }

  render(){
    console.log('IOT component')
  }
}
