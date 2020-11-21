import * as f from '@rex/f'
import addEventListener from './addEventListener'

export default (node) =>
  (name, handler) =>
    addEventListener(node, name, f.idle(handler))
