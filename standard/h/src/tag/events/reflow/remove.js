import * as f from '@kuba/f'

const remove = (that, current) =>
  that.removeEventListener(current.name)

export default f.curry(remove)
