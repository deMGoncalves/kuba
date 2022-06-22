import * as f from '@kuba/f'

const removeEventListener = (target, name) => (
  target.element[name] = undefined
)

export default f.frame(removeEventListener)
