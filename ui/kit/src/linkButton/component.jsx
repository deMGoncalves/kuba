import h from '@rex/h'
import * as f from '@rex/f'
import style from './style.css'

export default (props, children) =>
  <a className={[style.linkButton, props.className, style[props.color]]} href={f.or(props.href, '#')}>{children}</a>
