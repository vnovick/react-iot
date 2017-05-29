import React from 'react';
import { AppRegistry, Board, Platforms } from '../src';

const IoTApplicationWeb = () => (
  <div>
    Application
  </div>
)

class IoTApplicationPi extends React.Component {

}

AppRegistry.registerComponent('IoTApplication', IoTApplicationPi , {
  platform: Platforms.Pi,
  fallbackApp: IoTApplicationWeb,
  fallbackMountNode: document.querySelector('.iot-fallback')
});
