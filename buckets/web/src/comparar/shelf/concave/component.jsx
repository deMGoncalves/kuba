import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <text.Strong className={style.concave} master darker xs medium>
    Concave<br />
    <text.Span master xxxs>{concave.valor}</text.Span>
  </text.Strong>
