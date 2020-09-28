import * as f from '@rex/f'
import addEventListener from './addEventListener'
import stopPropagation from './stopPropagation'
import preventDefault from './preventDefault'

export default (element) =>
  (eventName, handler) =>
    addEventListener(element, f.slice(eventName, 0, -13), stopPropagation(preventDefault(handler)))
