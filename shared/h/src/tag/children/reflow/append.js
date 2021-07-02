import * as f from '@kuba/f'

const append = (that, _, child) =>
  that.append(child)

export default f.curry(append)
