import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <text.Span className={style.tamanho} master darker xxs bold>{tamanho.valor}</text.Span>
