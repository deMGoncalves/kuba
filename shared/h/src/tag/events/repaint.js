import * as f from '@kuba/f'
import { before } from '@kuba/hook'
import dom from '@kuba/h/src/dom'

const repaint = function (name, listener) {
  dom.query(this.target.id)[f.toLower(name)] = listener
  return [name, listener]
}

export default before(repaint)
