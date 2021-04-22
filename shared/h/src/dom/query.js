import * as f from '@kuba/f'
import map from './map'

export default (id) =>
  f.or(map.get(id), {})
