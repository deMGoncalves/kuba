import * as f from '@kuba/f'
import { before } from '@kuba/middleware'

function swapTag (tag) {
  tag.entity[f.magic('tag')] = this
  return [tag]
}

export default before(swapTag)
