import h from '@kuba/h'
import style from './style'

export default (props) =>
  <div className={style.sidebar} onClick={props.onClick} opened={props.opened} />
