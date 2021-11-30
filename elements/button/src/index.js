import skeleton from '@kuba/skeleton'
import has from './has'
import mapper from './mapper'
import merge from './merge'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? mapper(type)(merge(props, type), children)
        : skeleton.button(props)
})
