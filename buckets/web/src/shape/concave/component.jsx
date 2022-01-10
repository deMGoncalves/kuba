import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <>
    <text.Strong className={style.concave__strong} master darker xxs medium>Concave</text.Strong>
    <text.Span className={style.concave__span} master xxxs>{concave.valor}</text.Span>
  </>
