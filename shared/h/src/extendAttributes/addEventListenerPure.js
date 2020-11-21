import * as f from '@rex/f'
import addEventListener from './addEventListener'

export default (node) =>
  (eventName, handler) =>
    addEventListener(node, eventName, f.idle(handler))
