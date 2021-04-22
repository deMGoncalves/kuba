import * as f from '@kuba/f'

const append = (children, _current, other) =>
  children.append(other)

export default f.curry(append)
