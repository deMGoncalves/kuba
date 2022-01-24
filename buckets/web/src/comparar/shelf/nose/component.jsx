import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <text.Strong className={style.nose} master darker xs medium>
    <text.Span master darker medium xs>{nose.valor}</text.Span>
  </text.Strong>
