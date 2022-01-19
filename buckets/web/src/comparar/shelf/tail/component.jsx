import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <text.Strong className={style.tail} master darker xs medium>
    Tail<br />
    <text.Span master xxxs>{tail.valor}</text.Span>
  </text.Strong>
