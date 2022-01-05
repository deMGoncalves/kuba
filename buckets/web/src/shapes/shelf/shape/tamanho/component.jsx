import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <div className={style.tamanho}>
    <text.Span master darker xxs bold>{tamanho.valor}</text.Span>
  </div>
