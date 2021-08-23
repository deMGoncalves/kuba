import * as f from '@kuba/f'
import { after } from '@kuba/hook'

function willUpdate (returned) {
  this?.[f.magic('willUpdate')]?.()
  return returned
}

export default after(willUpdate)
