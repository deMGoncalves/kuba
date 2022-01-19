import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <text.Strong className={style.nose} master darker xs medium>
    Nose<br />
    <text.Span master xxxs>{nose.valor}</text.Span>
  </text.Strong>
