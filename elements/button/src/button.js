import h from '@kuba/h'
import * as f from '@kuba/f'
import style from './style.css'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      h('button', { ...props, className: [style.button, style[f.toLower(type)], props.className] }, ...children)
})
