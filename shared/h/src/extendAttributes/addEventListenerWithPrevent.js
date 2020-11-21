import * as f from '@rex/f'
import addEventListener from './addEventListener'
import preventDefault from './preventDefault'

export default (node) =>
  (eventName, handler) =>
    addEventListener(node, f.slice(eventName, 0, -8), preventDefault(f.idle(handler)))
