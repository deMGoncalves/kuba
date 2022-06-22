import * as f from '@kuba/f'

const removeAttribute = (target, key) => (
  target.element.removeAttribute(key)
)

export default f.frame(removeAttribute)
