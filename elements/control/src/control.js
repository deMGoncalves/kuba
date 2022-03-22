import * as f from '@kuba/f'
import h from '@kuba/h'
import mapper from './mapper'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      h(mapper[f.toLower(type)], props, ...children)
})
