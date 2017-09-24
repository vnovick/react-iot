// @flow

import type { Element } from 'react';

class Container {
  manager: Function

  constructor(manager: Function) {
    this.manager = manager;
  }

  static appendChild(child: Element<any>) {
    console.log('Add child');
  }

  static insertBefore(child: Element<any>) {
    console.log('Insert before child');
  }

  static removeChild(child: Element<any>) {
    console.log('Remove child');
  }

  static updateTree(child: Element<any>) {
    console.log('rebuild');
  }
}

export default Container;
