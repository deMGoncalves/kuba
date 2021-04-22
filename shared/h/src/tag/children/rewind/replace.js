import * as f from '@kuba/f'

const replace = (children, current, other) =>
  children.replace(current, other)

export default f.curry(replace)
