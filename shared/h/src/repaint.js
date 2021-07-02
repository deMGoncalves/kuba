import * as f from '@kuba/f'
import { after } from '@kuba/hook'

function repaint (returned) {
  f.or(this[f.magic('reflow')], f.always())()
  return returned
}

export default after(repaint)
