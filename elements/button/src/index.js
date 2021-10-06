import skeleton from '@kuba/skeleton'
import has from './has'
import mapper from './mapper'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? mapper(type)(props, children)
        : skeleton.button(props)
})
