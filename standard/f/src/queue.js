const queue = (target, ...args) =>
  target?.(() => queue(...args))

export default queue
