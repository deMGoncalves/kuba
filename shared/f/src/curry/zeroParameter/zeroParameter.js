export default (target) =>
  function () {
    return target.call(this, ...arguments)
  }
