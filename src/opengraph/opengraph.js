import description from './description'
import siteName from './siteName'
import title from './title'
import type from './type'
import url from './url'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      description(page)
      siteName(page)
      title(page)
      type(page)
      url(page)
    })

    return page
  }
