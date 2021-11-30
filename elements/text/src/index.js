import skeleton from '@kuba/skeleton'
import has from './has'
import text from './text'

export default new Proxy({}, {
  get: (_, tag) =>
    (props, children) =>
      has(children)
        ? text[tag](props, children)
        : skeleton.text(props)
})
