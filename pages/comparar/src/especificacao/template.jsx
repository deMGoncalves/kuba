import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (especificacao) =>
  <section className={style.especificacao}>
    <text.Data className={style.especificacao__data} master darker sm bold>
      <Show when={especificacao.master}><icon.Check /></Show>
      <Hide when={especificacao.master}>-</Hide>
    </text.Data>
    <dl className={style.especificacao__dl}>
      <text.Dt className={style.especificacao__text} master darker xxs medium>{especificacao.nome}</text.Dt>
      <text.Dd className={style.especificacao__text} master xxxs>{especificacao.descricao}</text.Dd>
    </dl>
    <text.Data className={style.especificacao__data} master darker sm bold>
      <Show when={especificacao.slave}><icon.Check /></Show>
      <Hide when={especificacao.slave}>-</Hide>
    </text.Data>
  </section>
