import * as f from '@kuba/f'

import style from './style'
import tag from './tag'

export default new Proxy({}, {
  get: (_, tagName) => (
    f.equal(tagName, 'style')
      ? style
      : tag(tagName)
  )
})
