import h from '@kuba/h'
import interpolate from './interpolate'
import minify from './minify'

export default (tagName) =>
  (strings, ...funcs) =>
    (props, children) =>
      h(tagName, { style: minify(interpolate(strings, funcs, props)), ...props }, ...children)
