import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (material) =>
  <text.Strong className={style.material} master darker xs medium>
    <text.Span className={style.material__span} master darker medium xs>{material.valor}</text.Span>
  </text.Strong>
