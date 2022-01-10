import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (lixa) =>
  <>
    <text.Strong className={style.lixa__strong} master darker xxs medium>Lixa</text.Strong>
    <text.Span className={style.lixa__span} master xxxs>{lixa.valor}</text.Span>
  </>
