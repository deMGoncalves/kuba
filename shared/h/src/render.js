import '@kuba/htmlparser'
import * as f from '@kuba/f'

const render = (element, ...nodes) =>
  element.append(...f.map(nodes, node => node.paint()))

export default f.curry(f.arity(2, f.frame(render)))
