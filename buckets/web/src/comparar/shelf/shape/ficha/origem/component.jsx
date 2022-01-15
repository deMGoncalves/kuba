import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (origem) =>
  <text.Label className={style.origem}>
    <text.Strong regular xs>Origem:</text.Strong>
    <text.Span medium xs>{origem.valor}</text.Span>
  </text.Label>
