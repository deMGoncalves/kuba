import * as f from '@rex/f'
import map from '@rex/sandbox/src/master/map'

const addEventListener = (event) =>
  (map.get(event.data.payload['@unid'])[event.data.payload.event] = event.data.payload.listener)

export default f.curry(f.arity(1, f.frame(addEventListener)))
