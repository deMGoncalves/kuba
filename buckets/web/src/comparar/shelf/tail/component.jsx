import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <text.Strong className={style.tail} master darker xs medium>
    <text.Span master darker medium xs>{tail.valor}</text.Span>
  </text.Strong>
