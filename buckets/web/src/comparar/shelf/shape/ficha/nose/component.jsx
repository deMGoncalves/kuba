import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <text.Label className={style.nose}>
    <text.Strong regular xs>Nose:</text.Strong>
    <text.Span medium xs>{nose.valor}</text.Span>
  </text.Label>
