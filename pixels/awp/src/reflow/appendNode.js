import * as f from '@rex/f'
import h from '@rex/awp/src/h'
import map from '@rex/awp/src/map'

const appendNode = (event) =>
  map.get(event.data.payload['@unid']).append(h(event.data.payload.node))

export default f.curry(f.arity(1, f.frame(appendNode)))
