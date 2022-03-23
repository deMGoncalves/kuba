import h, { Fragment } from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (wheelbase) =>
  <section className={style.wheelbase}>
    <text.Data className={style.wheelbase__data} master darker xs bold>{wheelbase.master}</text.Data>
    <dl className={style.wheelbase__dl}>
      <text.Dt className={style.wheelbase__text} master darker xxs medium>Wheelbase</text.Dt>
      <text.Dd className={style.wheelbase__text} master xxxs>Menor distância entre os trucks do shape</text.Dd>
    </dl>
    <text.Data className={style.wheelbase__data} master darker xs bold>{wheelbase.slave}</text.Data>
  </section>
