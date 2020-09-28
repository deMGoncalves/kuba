import * as f from '@rex/f'
import resolveExtend from './resolveExtend'

export default (attributes, element) =>
  f.always(element)(f.forEach(f.toPairs(attributes), resolveExtend(element)))
