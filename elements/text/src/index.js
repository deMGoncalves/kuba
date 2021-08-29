import skeleton from '@kuba/skeleton'
import has from './has'
import text from './text'

export default new Proxy({}, {
  get: (_, tagName) =>
    (props, children) =>
      has(children)
        ? text[tagName](props, children)
        : skeleton.text(props)
})
