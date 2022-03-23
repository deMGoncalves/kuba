import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (wells) =>
  <section className={style.wells}>
    <text.Data className={style.wells__data} master darker sm bold>
      <Show when={wells.master}><icon.Check /></Show>
      <Hide when={wells.master}>-</Hide>
    </text.Data>
    <dl className={style.wells__dl}>
      <text.Dt className={style.wells__text} master darker xxs medium>Wheel Wells</text.Dt>
      <text.Dd className={style.wells__text} master xxxs>Poço para as rodas não encostar no shape</text.Dd>
    </dl>
    <text.Data className={style.wells__data} master darker sm bold>
      <Show when={wells.slave}><icon.Check /></Show>
      <Hide when={wells.slave}>-</Hide>
    </text.Data>
  </section>
