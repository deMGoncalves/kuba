import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <div className={style.tamanho}>
    <text.Strong master darker md medium>{tamanho.valor}</text.Strong>
    <text.Span master xxxs>Tamanho</text.Span>
  </div>
