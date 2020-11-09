import * as f from '@rex/f'

const render = (element, ...children) =>
  element.append(...children)

export default f.curry(f.arity(2, f.frame(render)))
