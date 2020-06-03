import site from './site'
import summary from './summary'
import title from './title'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      site(page)
      summary(page)
      title(page)
    })

    return page
  }
