import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <section className={style.nose}>
    <text.Data className={style.nose__data} master darker sm bold>{nose.master}</text.Data>
    <dl className={style.nose__dl}>
      <text.Dt className={style.nose__text} master darker xxs medium>Nose</text.Dt>
      <text.Dd className={style.nose__text} master xxxs>Parte frontal inclinada do shape</text.Dd>
    </dl>
    <text.Data className={style.nose__data} master darker sm bold>{nose.slave}</text.Data>
  </section>
