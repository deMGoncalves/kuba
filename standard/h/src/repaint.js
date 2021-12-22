import * as f from '@kuba/f'
import { after } from '@kuba/middleware'

function repaint (output) {
  this[f.magic('reflow')]()
  return output
}

export default after(repaint)
