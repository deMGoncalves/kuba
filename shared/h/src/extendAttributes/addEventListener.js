import * as f from '@rex/f'

const addEventListener = (node, name, listener) =>
  f.assign(node, {
    __events__: f.concat(f.or(node.__events__, []), f.toLower(name)),
    [f.toLower(name)]: listener
  })

export default f.curry(f.arity(3, addEventListener))
