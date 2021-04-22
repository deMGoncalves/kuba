import * as f from '@kuba/f'
import { before } from '@kuba/hook'
import dom from '@kuba/h/src/dom'

function append (other) {
  dom.query(this.target.id).append(other[f.magic('paint')]())
  return [other]
}

export default before(append)
