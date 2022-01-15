import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <text.Label className={style.tail}>
    <text.Strong regular xs>Tail:</text.Strong>
    <text.Span medium xs>{tail.valor}</text.Span>
  </text.Label>
