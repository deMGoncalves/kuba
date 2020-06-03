import description from './description'
import site from './site'
import summary from './summary'
import title from './title'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      description(page)
      site(page)
      summary(page)
      title(page)
    })

    return page
  }
