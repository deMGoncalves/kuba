export default (handler) =>
  'requestIdleCallback' in window
    ? window.requestIdleCallback(handler)
    : window.setTimeout(handler, 0)
