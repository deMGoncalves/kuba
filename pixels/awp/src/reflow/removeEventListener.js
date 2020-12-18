import * as f from '@rex/f'
import map from '@rex/awp/src/map'

const removeEventListener = (event) =>
  (delete map.get(event.data.payload['@unid'])[event.data.payload.event])

export default f.curry(f.arity(1, f.frame(removeEventListener)))
