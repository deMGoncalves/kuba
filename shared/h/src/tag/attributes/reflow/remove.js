import * as f from '@kuba/f'

const remove = (that, current) =>
  that.removeAttribute(current.key)

export default f.curry(remove)
