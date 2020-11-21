import * as f from '@rex/f'
import addEventListener from './addEventListener'

export default (node) =>
  (name, listener) =>
    addEventListener(node, name, f.idle(listener))
