import * as f from '@rex/f'
import resolveExtend from './resolveExtend'

const extendAttributes = (props, element) =>
  f.always(element)(f.forEach(f.toPairs(props), resolveExtend(element)))

export default f.curry(extendAttributes)
