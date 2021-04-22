import * as f from '@kuba/f'
import { before } from '@kuba/hook'
import dom from '@kuba/h/src/dom'

function remove (current) {
  dom.query(f.or(current[f.magic('element')], current).id).remove()
  return [current]
}

export default before(remove)
