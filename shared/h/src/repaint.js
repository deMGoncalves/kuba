import * as f from '@kuba/f'
import { after } from '@kuba/middleware'

function repaint (returned) {
  this?.[f.magic('reflow')]?.()
  return returned
}

export default after(repaint)
