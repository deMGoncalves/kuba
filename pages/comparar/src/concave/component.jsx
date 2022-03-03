import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <section className={style.concave}>
    <text.Data className={style.concave__data} master darker sm bold>
      <Show when={concave.master}><icon.Check /></Show>
      <Hide when={concave.master}>-</Hide>
    </text.Data>
    <dl className={style.concave__dl}>
      <text.Dt className={style.concave__text} master darker xxs medium>Concave</text.Dt>
      <text.Dd className={style.concave__text} master xxxs>Inclinação simétrica das laterais do shape</text.Dd>
    </dl>
    <text.Data className={style.concave__data} master darker sm bold>
      <Show when={concave.slave}><icon.Check /></Show>
      <Hide when={concave.slave}>-</Hide>
    </text.Data>
  </section>
