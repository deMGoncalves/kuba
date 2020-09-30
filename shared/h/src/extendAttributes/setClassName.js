import * as f from '@rex/f'
import frame from '@rex/h/src/frame'

const setClassName = (element) =>
  frame((_, className) =>
    (element.className = f.join(f.flatten(f.concat([], className)), ' ')))

export default setClassName
