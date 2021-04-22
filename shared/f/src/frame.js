export default (target) =>
  (...args) =>
    window.requestAnimationFrame(() => target(...args))
