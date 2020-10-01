import * as f from '@rex/f'

const setClassName = (element) =>
  (_, className) =>
    (element.className = f.join(f.flatten(f.concat([], className)), ' '))

export default setClassName
