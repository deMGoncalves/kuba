import * as f from '@kuba/f'
import hook from '@kuba/hook'
import dom from '@kuba/h/src/dom'

const magic = f.magic('paint')
const paint = (fragment) =>
  f.assign(fragment, {
    [magic]: () => {
      const element = document.createDocumentFragment()
      fragment.children[magic](element)

      return dom.append(fragment.id, element)
    }
  })

export default hook(paint)
