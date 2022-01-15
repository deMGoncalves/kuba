import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (lixa) =>
  <text.Label className={style.lixa}>
    <text.Strong regular xs>Lixa:</text.Strong>
    <text.Span medium xs>{lixa.valor}</text.Span>
  </text.Label>
