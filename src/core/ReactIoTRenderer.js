// @flow 

import type { Element, Component } from 'react';
import type { FiberRoot } from 'react-dom/lib/ReactFiberRoot';
import reactFiberReconciler from 'react-dom/lib/ReactFiberReconciler';
import * as hostConfig from './hostConfig';
import ReactIotContainer from './ReactIotContainer';
import ReactIotManager from './ReactIotManager';


const ReactIoTReconciler = reactFiberReconciler(hostConfig);

export const ReactIoT: {|
  root: ? FiberRoot,
  reactIoTManager : any,
  renderIntoContainer: Function,
  unmountComponentAtNode: Function,
  render: Function
|} = {
  root: null,
  reactIoTManager: null,
  renderIntoContainer(
    parentComponent: ? Component<any, any, any>, element : Element<any>,
    callback: Function) {
    if (!this.root) {
      const reactIotManager = new ReactIotManager();
      const container = new ReactIotContainer(this.reactIotManager);
      this.root = ReactIoTReconciler.createContainer(container);
    }
    ReactIoTReconciler.updateContainer(
      element, this.root, parentComponent, callback);
  },

  unmountComponentAtNode(container: Element<any>) {
    if (this.root) {
      ReactIoTReconciler.updateContainer(null, this.root, null);
    }
  },
  render(element: Element<any>) {
    return this.renderIntoContainer(null, element);
  }
}
