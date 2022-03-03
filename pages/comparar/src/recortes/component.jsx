import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (recortes) =>
  <section className={style.recortes}>
    <text.Data className={style.recortes__data} master darker sm bold>
      <Show when={recortes.master}><icon.Check /></Show>
      <Hide when={recortes.master}>-</Hide>
    </text.Data>
    <dl className={style.recortes__dl}>
      <text.Dt className={style.recortes__text} master darker xxs medium>Cut-outs</text.Dt>
      <text.Dd className={style.recortes__text} master xxxs>Recorte ao redor das rodas do shape</text.Dd>
    </dl>
    <text.Data className={style.recortes__data} master darker sm bold>
      <Show when={recortes.slave}><icon.Check /></Show>
      <Hide when={recortes.slave}>-</Hide>
    </text.Data>
  </section>
