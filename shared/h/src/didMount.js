import * as f from '@kuba/f'
import { after } from '@kuba/hook'

function didMount (returned) {
  this?.[f.magic('didMount')]?.()
  return returned
}

export default after(didMount)
