import organization from './organization'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      organization(page)
    })

    return page
  }
