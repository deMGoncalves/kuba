import * as f from '@rex/f'
import map from '@rex/sandbox/src/master/map'

const setClassName = (event) =>
  (map.get(event.data.payload['@unid']).className = event.data.payload.value)

export default f.curry(f.arity(1, f.frame(setClassName)))
