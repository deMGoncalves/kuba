import h from '@kuba/h'
import button from '@kuba/button'
import style from './style'

export default (props) =>
  <aside className={style.back}>
    <button.icon.ArrowLeft onClick={props.onClick} />
  </aside>
