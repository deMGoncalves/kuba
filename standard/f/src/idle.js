import curry from './curry'

const idle = (func) =>
  (...args) => (
    'requestIdleCallback' in window
      ? window.requestIdleCallback(() => func(...args))
      : window.setTimeout(() => func(...args), 0)
  )

export default curry(idle)
