import base from './base'
import charset from './charset'
import description from './description'
import icon from './icon'
import viewport from './viewport'
import themeColor from './themeColor'
import title from './title'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      base()
      charset()
      description(page)
      icon()
      viewport()
      themeColor()
      title(page)
    })

    return page
  }
