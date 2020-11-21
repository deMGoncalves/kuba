import * as f from '@rex/f'
import addEventListener from './addEventListener'
import preventDefault from './preventDefault'

export default (node) =>
  (name, handler) =>
    addEventListener(node, f.slice(name, 0, -8), preventDefault(f.idle(handler)))
