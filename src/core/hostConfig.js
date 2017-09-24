import { createReactIoTInstance } from '../components';

export function createInstance(
  type, props, rootContainerInstance, hostContext, internalInstanceHandle
) {
  return createReactIoTInstance(
    type, props, rootContainerInstance, hostContext
  );
}


const log = (...args) => {
  console.log(...args);
};

const emptyObject = {};

export function appendInitialChild(parentInstance, child) {
  log('appendInitialChild', child);
}

export function appendChild(parentInstance, child) {
  log('appendChild', child);
}

export function removeChild(parentInstance, child) {
  log('removeChild', child);
}

export function insertBefore(parentInstance, child, beforeChild) {
  log('insertBefore');
}

export function finalizeInitialChildren(
  instance, type, props, rootContainerInstance
) {
  log('finalizeInitialChildren');
  // setInitialProperties(instance, type, props, rootContainerInstance);
  return false;
}

// prepare update is where you compute the diff for an instance. This is
// done here to separate computation of the diff to the applying of the
// diff. Fiber can reuse this work even if it pauses or aborts rendering a
// subset of the tree.

export function prepareUpdate(
  instance, type, oldProps, newProps, rootContainerInstance,
  hostContext
) {
  log('TODO: prepareUpdate');
  return null;
  // return diffProperties(instance, type, oldProps, newProps,
  // rootContainerInstance, hostContext);
}

export function commitUpdate(
  instance,
  updatePayload,
  type,
  oldProps,
  newProps,
  internalInstanceHandle,
) {
  // Apply the diff to the DOM node.
  // updateProperties(instance, updatePayload, type, oldProps, newProps);
  log('TODO: updateProperties');
}

// commitMount is called after initializeFinalChildren *if*
// `initializeFinalChildren` returns true.

export function commitMount(
  instance, type, newProps, internalInstanceHandle
) {
  log('commitMount');
  // noop
}

// HostContext is an internal object or reference for any bookkeeping your
// renderer may need to do based on current location in the tree. In DOM
// this is necessary for calling the correct `document.createElement` calls
// based upon being in an `html`, `svg`, `mathml`, or other context of the
// tree.

export function getRootHostContext(rootContainerInstance) {
  log('getRootHostContext');
  return emptyObject;
}

export function getChildHostContext(parentHostContext, type) {
  log('getChildHostContext');
  return emptyObject;
}

// getPublicInstance should be the identity function in 99% of all
// scenarios. It was added to support the `getNodeMock` functionality for
// the TestRenderers.

export function getPublicInstance(instance) {
  log('getPublicInstance');
  if (instance == null) {
    return null;
  }
  console.log(instance);
  return instance != null && instance.props.toJSON(instance);
}

// the prepareForCommit and resetAfterCommit methods are necessary for any
// global side-effects you need to trigger in the host environment. In
// ReactDOM this does things like disable the ReactDOM events to ensure no
// callbacks are fired during DOM manipulations

export function prepareForCommit() {
  log('prepareForCommit');
  // noop
}

export function resetAfterCommit() {
  log('resetAfterCommit');
  // noop
}

// the following four methods are regarding TextInstances. In our example
// renderer we don’t have specific text nodes like the DOM does so we’ll
// just noop all of them.

export function shouldSetTextContent(props) {
  log('shouldSetTextContent');
  return false;
}

export function resetTextContent(instance) {
  log('resetTextContent');
  // noop
}

export function createTextInstance(
  text, rootContainerInstance, hostContext, internalInstanceHandle
) {
  log('createTextInstance');
  return null;
}

export function commitTextUpdate(textInstance, oldText, newText) {
  log('commitTextUpdate');
  // noop
  throw new Error('commitTextUpdate should not be called');
}


export function scheduleAnimationCallback() {
  log('scheduleAnimationCallback');
}


export function scheduleDeferredCallback() {
  log('scheduleDeferredCallback');
}


export function shouldDeprioritizeSubtree() {
  return false;
}

export const useSyncScheduling = true;

