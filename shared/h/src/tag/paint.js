import * as f from '@kuba/f'
import hook from '@kuba/hook'
import dom from '@kuba/h/src/dom'

const magic = f.magic('paint')
const paint = (tag) =>
  f.assign(tag, {
    [magic]: () => {
      const element = document.createElement(tag.name, { is: tag.is })

      tag.attributes[magic](element)
      tag.children[magic](element)
      tag.className[magic](element)
      tag.events[magic](element)

      return dom.append(tag.id, element)
    }
  })

export default hook(paint)
