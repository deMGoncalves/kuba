import h from '@kuba/h'
import style from './style.css'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      h('a', { ...props, [type]: '', className: [style.link, props.className] }, ...children)
})
