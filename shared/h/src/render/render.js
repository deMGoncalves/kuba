import * as f from '@rex/f'
import frame from '@rex/h/src/frame'

const render = (element, ...children) =>
  frame(() => element.append(...children))

export default f.curry(f.arity(2, render))
