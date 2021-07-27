import h from '@kuba/h'
import interpolate from './interpolate'

export default new Proxy({}, {
  get: (_, tagName) =>
    (strings, ...funcs) =>
      (props, children) =>
        h(tagName, { ...props, style: interpolate(props, strings, funcs) }, ...children)
})
