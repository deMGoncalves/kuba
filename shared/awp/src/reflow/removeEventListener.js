import * as f from '@rex/f'
import map from '@rex/sandbox/src/master/map'

const removeEventListener = (event) =>
  (delete map.get(event.data.payload['@unid'])[event.data.payload.event])

export default f.curry(f.arity(1, f.frame(removeEventListener)))
