import h from '@kuba/h'
import styleBuild from './styleBuild'

export default new Proxy({}, {
  get: (_, tagName) =>
    (strings, ...funcs) =>
      (props, children) =>
        h(tagName, { ...props, style: styleBuild(props, strings, funcs) }, ...children)
})
