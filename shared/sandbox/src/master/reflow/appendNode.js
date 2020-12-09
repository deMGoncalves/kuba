import * as f from '@rex/f'
import h from '@rex/sandbox/src/master/h'
import map from '@rex/sandbox/src/master/map'

const appendNode = (event) =>
  map.get(event.data.payload['@unid']).append(h(event.data.payload.node))

export default f.curry(f.arity(1, f.frame(appendNode)))
