import * as f from '@kuba/f'

const remove = (that, current) =>
  that.remove(current)

export default f.curry(remove)
