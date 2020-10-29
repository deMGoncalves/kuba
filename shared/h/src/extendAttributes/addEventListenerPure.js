import * as f from '@rex/f'
import addEventListener from './addEventListener'

export default (element) =>
  (eventName, handler) =>
    addEventListener(element, f.slice(eventName, 0, -8), f.idle(handler))
