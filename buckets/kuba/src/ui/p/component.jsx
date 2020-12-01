import h from '@rex/h'
import style from './style.css'

export default (props, children) =>
  <p className={[style.p, style[props.color], props.className]}>{children}</p>
