import h from '@kuba/h'
import style from './style.css'

export default (props, children) =>
  <div {...props} className={[style.box, props.className]}>
    {children}
  </div>
