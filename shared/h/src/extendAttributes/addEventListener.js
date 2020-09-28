import * as f from '@rex/f'

const addEventListener = (element, name, handler) =>
  f.assign(element, {
    __events__: f.concat(f.or(element.__events__, []), f.toLower(name)),
    [f.toLower(name)]: (...args) => f.idle(() => handler(...args))
  })

export default f.curry(addEventListener)
