export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
    })

    return page
  }
