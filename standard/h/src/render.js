import * as f from '@kuba/f'

const render = (element, ...children) =>
  element.append(...f.map(children, c => c.paint()))

export default f.curry(f.arity(2, f.frame(render)))
