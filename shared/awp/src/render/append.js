import * as f from '@rex/f'
import h from '@rex/awp/src/h'

const render = (node, event) =>
  node.append(h(event.data.payload))

export default f.curry(f.arity(2, f.frame(render)))
