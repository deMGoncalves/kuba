import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <>
    <text.Strong className={style.tail__strong} master darker xxs medium>tail</text.Strong>
    <text.Span className={style.tail__span} master xxxs>{tail.valor}</text.Span>
  </>
