import * as f from '@kuba/f'
import { after } from '@kuba/hook'

function willMount (returned) {
  this?.[f.magic('willMount')]?.()
  return returned
}

export default after(willMount)
