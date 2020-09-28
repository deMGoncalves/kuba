import * as f from '@rex/f'
import frame from '@rex/h/src/frame'

export default (element) =>
  (_, className) =>
    frame(() => (element.className = f.join(f.flatten(f.concat([], className)), ' ')))
