import component from './component'
import has from './has'
import skeleton from '@kuba/skeleton'

export default new Proxy({}, {
  get: (_, tag) =>
    (props, children) =>
      has(children)
        ? component[tag](props, children)
        : skeleton.text(props)
})
