import * as f from '@rex/f'
import dispatchEvent from './dispatchEvent'
import isStop from './isStop'
import isPrevent from './isPrevent'
import preventDefault from './preventDefault'
import stopPropagation from './stopPropagation'

const addEventListener = (node, key, value) =>
  (node[key] = (event) => (
    (isStop(value) && stopPropagation(event)),
    (isPrevent(value) && preventDefault(event)),
    dispatchEvent(node, value)
  ))

export default f.curry(addEventListener)
