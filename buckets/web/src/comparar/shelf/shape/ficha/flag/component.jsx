import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (flag) =>
  <text.Label className={style.flag}>
    <text.Strong regular xs>Flag:</text.Strong>
    <text.Span medium xs>{flag.valor}</text.Span>
  </text.Label>
