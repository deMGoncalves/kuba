import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (simetrico) =>
  <section className={style.simetrico}>
    <text.Data className={style.simetrico__data} master darker sm bold>
      <Show when={simetrico.master}><icon.Check /></Show>
      <Hide when={simetrico.master}>-</Hide>
    </text.Data>
    <dl className={style.simetrico__dl}>
      <text.Dt className={style.simetrico__text} master darker xxs medium>Simétrico</text.Dt>
      <text.Dd className={style.simetrico__text} master xxxs>Shape simétrico é mesmo em ambas as extremidades</text.Dd>
    </dl>
    <text.Data className={style.simetrico__data} master darker sm bold>
      <Show when={simetrico.slave}><icon.Check /></Show>
      <Hide when={simetrico.slave}>-</Hide>
    </text.Data>
  </section>
