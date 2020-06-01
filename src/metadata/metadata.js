export default (Klass) =>
  function () {
    const target = new Klass(...arguments)
    setImmediate(() => console.log(target))
    return target
  }
