export default (func) =>
  function () {
    return func(...arguments)
  }
