import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <text.Strong className={style.tamanho} master darker xs medium>
    {tamanho.valor}<br />
    <text.Span master xxxs>Tamanho</text.Span>
  </text.Strong>
