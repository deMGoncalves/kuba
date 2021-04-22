import * as f from '@kuba/f'

const remove = (children, current) =>
  children.remove(current)

export default f.curry(remove)
