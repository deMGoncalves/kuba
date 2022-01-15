import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <text.Label className={style.concave}>
    <text.Strong regular xs>Concave:</text.Strong>
    <text.Span medium xs>{concave.valor}</text.Span>
  </text.Label>
