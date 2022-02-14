import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (flares) =>
  <section className={style.flares}>
    <text.Data className={style.flares__data} master darker sm bold>{flares.master}</text.Data>
    <dl className={style.flares__dl}>
      <text.Dt className={style.flares__text} master darker xxs medium>Wheel Flares</text.Dt>
      <text.Dd className={style.flares__text} master xxxs>Onda no shape acima da roda para evitar que encostem</text.Dd>
    </dl>
    <text.Data className={style.flares__data} master darker sm bold>{flares.slave}</text.Data>
  </section>
