import * as f from '@kuba/f'

const replace = (that, current, child) =>
  that.replace(current, child)

export default f.curry(replace)
