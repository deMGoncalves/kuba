import h from '@kuba/h'
import style from './style.css'

export default (props, children) =>
  <a {...props} className={[style.link, props.className]}>{children}</a>
