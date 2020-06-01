import base from './base'
import charset from './charset'
import description from './description'
import title from './title'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      base()
      charset()
      description(page)
      title(page)
    })

    return page
  }
