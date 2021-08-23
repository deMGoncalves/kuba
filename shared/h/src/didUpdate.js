import * as f from '@kuba/f'
import { after } from '@kuba/hook'

function didUpdate (returned) {
  this?.[f.magic('didUpdate')]?.()
  return returned
}

export default after(didUpdate)
