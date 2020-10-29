import curry from '@rex/f/src/curry'

const idle = (handler) =>
  function () {
    'requestIdleCallback' in window
      ? window.requestIdleCallback(handler.bind(this, ...arguments))
      : window.setTimeout(handler.bind(this, ...arguments), 0)
  }

export default curry(idle)
