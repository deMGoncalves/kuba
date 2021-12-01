import h from '@kuba/h'
import style from './style'

export default new Proxy({}, {
  get: (_, tag) =>
    (props, children) =>
      h(tag, { className: [style.story, props.className] }, ...children)
})
