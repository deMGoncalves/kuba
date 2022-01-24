import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (laminas) =>
  <text.Strong className={style.laminas} master darker xs medium>
    <text.Span className={style.laminas__span} master darker medium xs>{laminas.valor}</text.Span>
  </text.Strong>
