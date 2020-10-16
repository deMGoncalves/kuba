import h from '@rex/h'
import * as f from '@rex/f'
import tag from './tag'
import style from './style.css'

export default (props, children) =>
  h(`h${f.or(props.level, 1)}`, { className: [style.heading, style[props.color], style[props.size], props.className] }, ...children)
