const idle = (target) =>
  (...args) => (
    'requestIdleCallback' in window
      ? window.requestIdleCallback(() => target(...args))
      : window.setTimeout(() => target(...args), 0)
  )

export default idle
