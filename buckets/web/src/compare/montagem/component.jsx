import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (montagem) =>
  <section className={style.montagem}>
    <text.Data className={style.montagem__data} master darker sm bold>{montagem.master}</text.Data>
    <dl className={style.montagem__dl}>
      <text.Dt className={style.montagem__text} master darker xxs medium>Montagem</text.Dt>
      <text.Dd className={style.montagem__text} master xxxs>A maneira como o truck é anexado ao shape</text.Dd>
    </dl>
    <text.Data className={style.montagem__data} master darker sm bold>{montagem.slave}</text.Data>
  </section>
