import * as f from '@kuba/f'
import decorate from './decorate'
import mapper from './mapper'

export default (name, listener) => {
  const [event, handler] = mapper(name)

  return [
    f.toLower(event),
    decorate(handler, listener)
  ]
}
