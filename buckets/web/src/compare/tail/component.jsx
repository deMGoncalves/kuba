import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <section className={style.tail}>
    <text.Data className={style.tail__data} master darker sm bold>{tail.master}</text.Data>
    <dl className={style.tail__dl}>
      <text.Dt className={style.tail__text} master darker xxs medium>Tail</text.Dt>
      <text.Dd className={style.tail__text} master xxxs>Parte traseira inclinada do shape</text.Dd>
    </dl>
    <text.Data className={style.tail__data} master darker sm bold>{tail.slave}</text.Data>
  </section>
