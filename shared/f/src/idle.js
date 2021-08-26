import curry from './curry'

const idle = (func) =>
  (...args) =>
    'requestIdleCallback' in self
      ? self.requestIdleCallback(() => func(...args))
      : self.setTimeout(() => func(...args), 0)

export default curry(idle)
