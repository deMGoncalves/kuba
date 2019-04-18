export default (...handlers) =>
  function (...args) {
    for (let [can, proccess] of handlers) {
      if (can(...args)) return proccess(...args)
    }
  }
