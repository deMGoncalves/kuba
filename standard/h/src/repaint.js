import * as f from '@kuba/f'
import { after } from '@kuba/middleware'

function repaint (output) {
  this[f.dunder.reflow]?.()
  return output
}

export default after(repaint)
