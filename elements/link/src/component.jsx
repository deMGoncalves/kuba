import h from '@rex/sandbox'
import * as f from '@rex/f'
import style from './style.css'

export default (props, children) =>
  <a className={[style.link, style[props.color], style[props.icon], props.className]} href={f.or(props.href, '#')}>{children}</a>
