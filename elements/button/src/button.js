import h from '@kuba/h'
import style from './style.css'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      h('button', { ...props, [type]: '', className: [style.button, props.className] }, ...children)
})
