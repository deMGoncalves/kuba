import h from '@kuba/h'
import interpolate from './interpolate'
import minify from './minify'

export default new Proxy({}, {
  get: (_, tagName) =>
    (strings, ...funcs) =>
      (props, children) =>
        h(tagName, { ...props, style: minify(interpolate(props, strings, funcs)) }, ...children)
})
