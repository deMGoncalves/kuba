import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (material) =>
  <>
    <text.Strong className={style.material__strong} master darker xxs medium>Material</text.Strong>
    <text.Span className={style.material__span} master xxxs>{material.valor}</text.Span>
  </>
