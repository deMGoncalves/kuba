import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <>
    <text.Strong className={style.nose__strong} master darker xxs medium>Nose</text.Strong>
    <text.Span className={style.nose__span} master xxxs>{nose.valor}</text.Span>
  </>
