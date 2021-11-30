import skeleton from '@kuba/skeleton'
import button from './button'
import has from './has'
import merge from './merge'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? button(merge(props, type), children)
        : skeleton.button(props)
})
