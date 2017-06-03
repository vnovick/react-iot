import { ReactIoTRenderer } from './ReactIoTRenderer';
import React from 'react';

export default class AppRegistry {

  // renderFallbackAppIfExist(config){
  //   if (config) {
  //     const FallbackApplicationComponent = config.fallbackApp;
  //     return DomRenderer.render(<FallbackApplicationComponent />, config.fallbackMountNode)
  //   }
  // }

  registerComponent(name, Component, config) {
    const IoTRenderer = new ReactIoTRenderer(config);
    IoTRenderer.render(<Component />, 'IoTApplication')
  }
}
