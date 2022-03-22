import component from './component'
import has from './has'
import merge from './merge'
import skeleton from '@kuba/skeleton'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? component(merge(props, type), children)
        : skeleton.link(props)
})
