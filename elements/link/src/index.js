import skeleton from '@kuba/skeleton'
import link from './link'
import merge from './merge'
import has from './has'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? link(merge(props, type), children)
        : skeleton.link(props)
})
