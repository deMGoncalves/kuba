import siteName from './siteName'
import title from './title'
import url from './url'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      siteName(page)
      title(page)
      url(page)
    })

    return page
  }
