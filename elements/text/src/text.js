import h from '@rex/htmlparser'
import style from './style.css'

export default new Proxy({}, {
  get: (_, tagName) =>
    (props, children) =>
      h(tagName, { ...props, className: [style.text, style[props.color], style[props.size], props.className] }, ...children)
})
