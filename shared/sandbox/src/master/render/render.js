import * as f from '@rex/f'
import append from './append'
import isRender from './isRender'

const render = (node, event) =>
  (isRender(event) && append(node, event))

export default f.curry(f.arity(2, f.idle(render)))
