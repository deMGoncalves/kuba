import base from './base'
import description from './description'
import title from './title'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      base()
      description(page)
      title(page)
    })

    return page
  }
