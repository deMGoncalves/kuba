import h from '@rex/htmlparser'
import style from './style.css'

export default new Proxy({}, {
  get: (_, tagName) =>
    (props, children) =>
      h(tagName, { ...props, className: [style.text, props.className] }, ...children)
})
