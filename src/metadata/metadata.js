import author from './author'
import base from './base'
import canonical from './canonical'
import charset from './charset'
import description from './description'
import icon from './icon'
import manifest from './manifest'
import robots from './robots'
import themeColor from './themeColor'
import title from './title'
import viewport from './viewport'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      author(page)
      base(page)
      canonical(page)
      charset(page)
      description(page)
      icon(page)
      manifest(page)
      robots(page)
      themeColor(page)
      title(page)
      viewport(page)
    })

    return page
  }
