import site from './site'
import summary from './summary'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      site(page)
      summary(page)
    })

    return page
  }
