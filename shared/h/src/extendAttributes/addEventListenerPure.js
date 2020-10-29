import * as f from '@rex/f'
import addEventListener from './addEventListener'

export default (element) =>
  (eventName, handler) =>
    addEventListener(element, eventName, f.idle(handler))
