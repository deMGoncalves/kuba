import * as f from '@rex/f'
import addEventListener from './addEventListener'
import stopPropagation from './stopPropagation'

export default (element) =>
  (eventName, handler) =>
    addEventListener(element, f.slice(eventName, 0, -5), stopPropagation(f.idle(handler)))
