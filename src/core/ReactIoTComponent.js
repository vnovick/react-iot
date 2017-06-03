import {
  // setPayloadForPin,
  // validatePayloadForPin
} from './ReactIoTStore';

// const assertValidProps = validatePayloadForPin;

const ReactIoTComponent = {
  createElement(tag, props, rootContainerElement, hostContext){
    console.log("createElement", tag, props, rootContainerElement, hostContext)
  },
  setInitialProperties(element, tag, rawProps, rootContainerElement){
    console.log("setINit", rootContainerElement, element)

  },
  diffProperties(){

  },
  updateProperties(){
    console.log("log", element)
  }
}

export default ReactIoTComponent;
