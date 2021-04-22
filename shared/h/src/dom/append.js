import * as f from '@kuba/f'
import map from './map'

export default (id, node) =>
  f.always(node)(map.set(id, node))
