import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (flex) =>
  <section className={style.flex}>
    <text.Data className={style.flex__data} master darker sm bold>
      <Show when={flex.master}>{flex.master}</Show>
      <Hide when={flex.master}>-</Hide>
    </text.Data>
    <dl className={style.flex__dl}>
      <text.Dt className={style.flex__text} master darker xxs medium>Flex</text.Dt>
      <text.Dd className={style.flex__text} master xxxs>Nível de flexibilidade do shape</text.Dd>
    </dl>
    <text.Data className={style.flex__data} master darker sm bold>
      <Show when={flex.slave}>{flex.slave}</Show>
      <Hide when={flex.slave}>-</Hide>
    </text.Data>
  </section>
