import h from '@rex/htmlparser'
import style from './style.css'

export default (props, children) =>
  <div className={[style.container, props.className]}>{children}</div>
