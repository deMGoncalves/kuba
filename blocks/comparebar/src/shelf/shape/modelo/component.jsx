import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (modelo) =>
  <text.H1 className={style.modelo} master darker xxxs>{modelo.valor}</text.H1>
