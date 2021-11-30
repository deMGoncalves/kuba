import skeleton from '@kuba/skeleton'
import has from './has'
import merge from './merge'
import tag from './tag'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? tag(merge(props, type), children)
        : skeleton.tag(props)
})
