import h from '@kuba/h'
import icon from '@kuba/icon'
import schema from './schema.json'
import style from './style.css'

export default (props) =>
  <div {...props} className={[style.flag, props.className]}>
    <icon.Github className={style.flag__icon} onClick={() => location.assign(schema.url)} largest />
  </div>
