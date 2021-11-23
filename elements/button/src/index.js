import skeleton from '@kuba/skeleton'
import button from './button'
import merge from './merge'
import has from './has'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? button(merge(props, type), children)
        : skeleton.button(props)
})
