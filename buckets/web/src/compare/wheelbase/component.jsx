import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (wheelbase) =>
  <>
    <hgroup className={style.wheelbase__hgroup}>
      <text.H2 className={style.wheelbase__h2} master darker xs bold>Wheelbase</text.H2>
      <text.P className={style.wheelbase__p} master xxxs>Menor distância entre os trucks do shape</text.P>
    </hgroup>
    <text.Data className={[style.wheelbase__data, style.master]} master xs bold>{wheelbase.master}</text.Data>
    <text.Data className={style.wheelbase__data} master xs bold>{wheelbase.slave}</text.Data>
  </>
