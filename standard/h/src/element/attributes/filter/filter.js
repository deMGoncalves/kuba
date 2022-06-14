import * as f from '@kuba/f'
import decorate from './decorate'
import mapper from './mapper'

const filter = (key, value) => {
  const [attribute, handler] = mapper(key)

  return [
    f.toLower(attribute),
    decorate(handler, value)
  ]
}

export default f.apply(f.memoize(filter))
