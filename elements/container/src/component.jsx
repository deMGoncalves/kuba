import h from '@kuba/h'
import style from './style.css'

export default (props, children) =>
  <div {...props} className={[style.container, props.className]}>{children}</div>
