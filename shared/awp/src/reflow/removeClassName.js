import * as f from '@rex/f'
import map from '@rex/awp/src/map'

const removeClassName = (event) =>
  (map.get(event.data.payload['@unid']).className = '')

export default f.curry(f.arity(1, f.frame(removeClassName)))
