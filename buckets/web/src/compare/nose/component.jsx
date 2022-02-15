import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <section className={style.nose}>
    <text.Data className={style.nose__data} master darker sm bold>
      <Show when={nose.master}><icon.Check /></Show>
      <Hide when={nose.master}>-</Hide>
    </text.Data>
    <dl className={style.nose__dl}>
      <text.Dt className={style.nose__text} master darker xxs medium>Nose</text.Dt>
      <text.Dd className={style.nose__text} master xxxs>Parte frontal inclinada do shape</text.Dd>
    </dl>
    <text.Data className={style.nose__data} master darker sm bold>
      <Show when={nose.slave}><icon.Check /></Show>
      <Hide when={nose.slave}>-</Hide>
    </text.Data>
  </section>
