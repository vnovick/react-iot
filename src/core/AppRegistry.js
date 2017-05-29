import { DomRenderer, ReactIoTRenderer } from './ReactIoTRenderer';
import React from 'react';

export default class AppRegistry {

  renderFallbackAppIfExist(config){
    if (config) {
      const FallbackApplicationComponent = config.fallbackApp;
      return DomRenderer.render(<FallbackApplicationComponent />, config.fallbackMountNode)
    }
  }

  registerComponent(name, Component, config) {
    if (window) {
      console.warn("IN BROWSER ENVIRONMENT - REVERTING TO REACT-DOM", name, config);
      this.renderFallbackAppIfExist(config)
    } else {
      const IoTRenderer = new ReactIoTRenderer(config);
      IoTRenderer.render(Component)
    }
  }
}
