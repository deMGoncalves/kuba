import * as f from '@rex/f'
import resolveExtend from './resolveExtend'

const extendAttributes = (attributes, element) =>
  f.always(element)(f.forEach(f.toPairs(attributes), resolveExtend(element)))

export default f.curry(extendAttributes)
