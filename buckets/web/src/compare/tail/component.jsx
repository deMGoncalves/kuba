import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <>
    <hgroup className={style.tail__hgroup}>
      <text.H2 className={style.tail__h2} master darker xs bold>Tail</text.H2>
      <text.P className={style.tail__p} master xxxs>Parte traseira inclinada do shape</text.P>
    </hgroup>
    <text.Data className={[style.tail__data, style.master]} master xxxs bold>{tail.master}</text.Data>
    <text.Data className={style.tail__data} master xxxs bold>{tail.slave}</text.Data>
  </>
