import * as f from '@kuba/f'

const addEventListener = (target, name, listener) => (
  target.element[name] = listener
)

export default f.frame(addEventListener)
