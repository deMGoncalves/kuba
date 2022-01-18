import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (material) =>
  <text.Strong className={style.material} master darker xs medium>
    Material<br />
    <text.Span className={style.material__span} master xxxs>{material.valor}</text.Span>
  </text.Strong>
