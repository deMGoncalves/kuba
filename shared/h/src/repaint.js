import * as f from '@kuba/f'
import { after } from '@kuba/hook'

function repaint (returned) {
  this?.[f.magic('reflow')]?.()
  return returned
}

export default after(repaint)
