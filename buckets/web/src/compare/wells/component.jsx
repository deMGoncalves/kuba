import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (wells) =>
  <section className={style.wells}>
    <text.Data className={style.wells__data} master darker sm bold>{wells.master}</text.Data>
    <dl className={style.wells__dl}>
      <text.Dt className={style.wells__text} master darker xxs medium>Wheel Wells</text.Dt>
      <text.Dd className={style.wells__text} master xxxs>Poço para as rodas não encostar no shape</text.Dd>
    </dl>
    <text.Data className={style.wells__data} master darker sm bold>{wells.slave}</text.Data>
  </section>
