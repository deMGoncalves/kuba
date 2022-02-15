import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (simetrico) =>
  <section className={style.simetrico}>
    <text.Data className={style.simetrico__data} master darker sm bold>{simetrico.master}</text.Data>
    <dl className={style.simetrico__dl}>
      <text.Dt className={style.simetrico__text} master darker xxs medium>Simétrico</text.Dt>
      <text.Dd className={style.simetrico__text} master xxxs>Shape simétrico é mesmo em ambas as extremidades</text.Dd>
    </dl>
    <text.Data className={style.simetrico__data} master darker sm bold>{simetrico.slave}</text.Data>
  </section>
