import h from '@kuba/h'
import button from '@kuba/button'
import style from './style'

export default (props) =>
  <div className={style.back} fixed>
    <button.icon.ArrowLeft onClick={props.onClick} />
  </div>
