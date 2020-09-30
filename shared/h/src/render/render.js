import * as f from '@rex/f'
import frame from '@rex/h/src/frame'

const render = (element, ...children) =>
  element.append(...children)

export default f.curry(f.arity(2, frame(render)))
