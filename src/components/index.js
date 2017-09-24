import React from 'react';
import Board from './Board';
import Container from './Container';
import Led from './Led';
import Button from './Button';


const supportedComponents = {
  Board,
  Container,
  Led,
  Button
};

// TODO support board, led syntax

export const createReactIoTInstance = (
  type, props, rootContainerInstance, hostContext
) => {
  if (Object.keys(supportedComponents).map(key => key.toLowerCase()).includes(type)) {
    const Component = supportedComponents[`${type.charAt(0).toUpperCase()}${type.slice(1)}`];
    return React.createElement(Component, props);
  }
  throw Error(`Element ${type} is not supported`);
};

export {
  Board,
  Container,
  Led,
  Button
};
