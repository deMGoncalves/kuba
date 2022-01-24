import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <text.Strong className={style.tamanho} master darker xs medium>
    <text.Span master darker medium xs>{tamanho.valor}</text.Span>
  </text.Strong>
