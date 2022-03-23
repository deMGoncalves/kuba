import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (montagem) =>
  <section className={style.montagem}>
    <text.Data className={style.montagem__data} master darker sm bold>
      <Show when={montagem.master}>{montagem.master}</Show>
      <Hide when={montagem.master}>-</Hide>
    </text.Data>
    <dl className={style.montagem__dl}>
      <text.Dt className={style.montagem__text} master darker xxs medium>Montagem</text.Dt>
      <text.Dd className={style.montagem__text} master xxxs>A maneira como o truck é anexado ao shape</text.Dd>
    </dl>
    <text.Data className={style.montagem__data} master darker sm bold>
      <Show when={montagem.slave}>{montagem.slave}</Show>
      <Hide when={montagem.slave}>-</Hide>
    </text.Data>
  </section>
