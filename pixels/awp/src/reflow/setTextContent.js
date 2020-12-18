import * as f from '@rex/f'
import map from '@rex/awp/src/map'

const setTextContent = (event) =>
  (map.get(event.data.payload['@unid']).textContent = event.data.payload.textContent)

export default f.curry(f.arity(1, f.frame(setTextContent)))
