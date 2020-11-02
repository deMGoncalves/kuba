import h from '@rex/h'
import * as f from '@rex/f'
import style from './style.css'

export default (props, children) =>
  h(`h${f.or(props.level, 1)}`, { ...props, className: [style.heading, style[props.color], style[props.size], props.className] }, ...children)
