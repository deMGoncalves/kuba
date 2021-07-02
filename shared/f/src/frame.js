export default (func) =>
  (...args) =>
    window.requestAnimationFrame(() => func(...args))
