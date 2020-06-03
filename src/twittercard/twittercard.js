import summary from './summary'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      summary(page)
    })

    return page
  }
