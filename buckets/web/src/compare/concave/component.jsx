import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <section className={style.concave}>
    <text.Data className={style.concave__data} master darker sm bold>{concave.master}</text.Data>
    <dl className={style.concave__dl}>
      <text.Dt className={style.concave__text} master darker xxs medium>Concave</text.Dt>
      <text.Dd className={style.concave__text} master xxxs>Inclinação simétrica das laterais do shape</text.Dd>
    </dl>
    <text.Data className={style.concave__data} master darker sm bold>{concave.slave}</text.Data>
  </section>
