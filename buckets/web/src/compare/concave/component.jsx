import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <>
    <hgroup className={style.concave__hgroup}>
      <text.H2 className={style.concave__h2} master darker xs bold>Concave</text.H2>
      <text.P className={style.concave__p} master xxxs>Inclinação simétrica das laterais do shape</text.P>
    </hgroup>
    <text.Data className={[style.concave__data, style.master]} master xxs bold>{concave.master}</text.Data>
    <text.Data className={style.concave__data} master xxs bold>{concave.slave}</text.Data>
  </>
