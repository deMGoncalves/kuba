import * as f from '@kuba/f'

export default (handler, mapper) =>
  (props) =>
    f.always(handler(props))(f.forEach(mapper, (key) => delete props[key]))
