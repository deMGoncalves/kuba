import * as f from '@rex/f'
import resolveExtend from './resolveExtend'

const extendAttributes = (props, node) =>
  f.always(node)(f.forEach(f.toPairs(props), resolveExtend(node)))

export default f.curry(extendAttributes)
