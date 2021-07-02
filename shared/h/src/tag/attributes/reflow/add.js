import * as f from '@kuba/f'

const add = (that, _, attribute) =>
  that.setAttribute(attribute.key, attribute.value)

export default f.curry(add)
