import * as f from '@kuba/f'

const extend = (attributes, _current, other) =>
  attributes.setItem(other.key, other.value)

export default f.curry(extend)
