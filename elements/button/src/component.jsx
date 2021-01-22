import h from '@rex/htmlparser'
import * as f from '@rex/f'
import style from './style.css'

export default (props, children) =>
  <a {...props} className={[style.button, props.className]} href={f.or(props.href, '#')}>{children}</a>
