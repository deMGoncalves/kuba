import * as f from '@rex/f'
import map from '@rex/sandbox/src/master/map'

const removeAttribute = (event) =>
  map.get(event.data.payload['@unid']).removeAttribute(event.data.payload.key)

export default f.curry(f.arity(1, f.frame(removeAttribute)))
