import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (recortes) =>
  <section className={style.recortes}>
    <text.Data className={style.recortes__data} master darker sm bold>{recortes.master}</text.Data>
    <dl className={style.recortes__dl}>
      <text.Dt className={style.recortes__text} master darker xxs medium>Cut-outs</text.Dt>
      <text.Dd className={style.recortes__text} master xxxs>Recorte ao redor das rodas do shape</text.Dd>
    </dl>
    <text.Data className={style.recortes__data} master darker sm bold>{recortes.slave}</text.Data>
  </section>
