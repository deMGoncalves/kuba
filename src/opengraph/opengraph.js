import siteName from './siteName'
import title from './title'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      siteName(page)
      title(page)
    })

    return page
  }
