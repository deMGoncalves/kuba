export default (func) =>
  (...args) =>
    'requestAnimationFrame' in window
      ? window.requestAnimationFrame(() => func(...args))
      : window.setTimeout(() => func(...args), 0)
