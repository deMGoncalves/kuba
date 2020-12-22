import * as f from '@rex/f'
import addEventListener from './addEventListener'
import stopPropagation from './stopPropagation'

export default (node) =>
  (name, listener) =>
    addEventListener(node, f.slice(name, 0, -5), stopPropagation(f.idle(listener)))
