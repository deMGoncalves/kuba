export default (func) =>
  (...args) =>
    'window' in self
      ? window.requestAnimationFrame(() => func(...args))
      : setTimeout(() => func(...args), 0)
