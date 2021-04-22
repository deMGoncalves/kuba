import * as f from '@kuba/f'
import { before } from '@kuba/hook'
import dom from '@kuba/h/src/dom'

function replace (current, other) {
  dom.query(this.target.id).replaceChild(other[f.magic('paint')](), dom.query(f.or(current[f.magic('element')], current).id))
  return [current, other]
}

export default before(replace)
