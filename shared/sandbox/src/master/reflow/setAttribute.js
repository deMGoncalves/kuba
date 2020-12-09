import * as f from '@rex/f'
import map from '@rex/sandbox/src/master/map'

const setAttribute = (event) =>
  map.get(event.data.payload['@unid']).setAttribute(event.data.payload.key, event.data.payload.value)

export default f.curry(f.arity(1, f.frame(setAttribute)))
