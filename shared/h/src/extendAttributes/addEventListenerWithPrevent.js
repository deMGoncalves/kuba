import * as f from '@rex/f'
import addEventListener from './addEventListener'
import preventDefault from './preventDefault'

export default (element) =>
  (eventName, handler) =>
    addEventListener(element, f.slice(eventName, 0, -8), preventDefault(f.idle(handler)))
