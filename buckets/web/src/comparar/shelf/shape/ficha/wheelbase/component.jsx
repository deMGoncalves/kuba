import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (wheelbase) =>
  <text.Label className={style.wheelbase}>
    <text.Strong regular xs>Wheelbase:</text.Strong>
    <text.Span medium xs>{wheelbase.valor}</text.Span>
  </text.Label>
