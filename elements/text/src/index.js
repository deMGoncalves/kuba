import skeleton from '@kuba/skeleton'
import notEmpty from './notEmpty'
import text from './text'

export default new Proxy({}, {
  get: (_, tagName) =>
    (props, children) =>
      notEmpty(children)
        ? text[tagName](props, children)
        : skeleton.text(props)
})
