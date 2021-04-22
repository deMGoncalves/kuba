import { before } from '@kuba/hook'
import dom from '@kuba/h/src/dom'

const repaint = function (key, value) {
  dom.query(this.target.id)[value ? 'setAttribute' : 'removeAttribute'](key, value)
  return [key, value]
}

export default before(repaint)
