import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (modelo) =>
  <text.H1 className={style.modelo} master darker xxxs bold>{modelo.valor}</text.H1>
