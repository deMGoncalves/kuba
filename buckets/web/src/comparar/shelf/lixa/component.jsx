import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (lixa) =>
  <text.Strong className={style.lixa} master darker xs medium>
    <text.Span master darker medium xs>{lixa.valor}</text.Span>
  </text.Strong>
