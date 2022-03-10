export default (func) =>
  (...args) =>
    'requestAnimationFrame' in self
      ? self.requestAnimationFrame(() => func(...args))
      : self.setTimeout(() => func(...args), 0)
