import * as f from '@kuba/f'
import hook from '@kuba/hook'
import dom from '@kuba/h/src/dom'

const paint = (text) =>
  f.assign(text, {
    [f.magic('paint')]: () =>
      dom.append(text.id, document.createTextNode(text.content))
  })

export default hook(paint)
