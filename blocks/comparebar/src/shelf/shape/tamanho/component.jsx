import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <text.Data className={style.tamanho} master darker xxs medium>{tamanho.valor}</text.Data>
