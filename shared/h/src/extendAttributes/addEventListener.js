import * as f from '@rex/f'
import frame from '@rex/h/src/frame'

const addEventListener = (element, name, handler) =>
  f.assign(element, {
    __events__: f.concat(f.or(element.__events__, []), f.toLower(name)),
    [f.toLower(name)]: handler
  })

export default f.curry(f.arity(3, frame(addEventListener)))
