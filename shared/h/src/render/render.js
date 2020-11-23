import * as f from '@rex/f'

const render = async (node, ...children) =>
  node.append(...(await Promise.all(children)))

export default f.curry(f.arity(2, f.frame(render)))
