export default (target) =>
  function () {
    return target(...arguments)
  }
