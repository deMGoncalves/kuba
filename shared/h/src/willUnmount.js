import * as f from '@kuba/f'
import { after } from '@kuba/hook'

function willUnmount (returned) {
  this?.[f.magic('willUnmount')]?.()
  return returned
}

export default after(willUnmount)
