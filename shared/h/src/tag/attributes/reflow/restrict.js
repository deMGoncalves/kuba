import * as f from '@kuba/f'

const restrict = (that, current, attribute = {}) =>
  that
    .removeAttribute(current.key)
    .setAttribute(attribute.key, attribute.value)

export default f.curry(restrict)
