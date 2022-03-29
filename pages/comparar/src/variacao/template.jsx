import h, { Fragment } from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (variacao) =>
  <section className={style.variacao}>
    <text.Data className={style.variacao__data} master darker xs bold>{variacao.master}</text.Data>
    <dl className={style.variacao__dl}>
      <text.Dt className={style.variacao__text} master darker xxs medium>{variacao.nome}</text.Dt>
      <text.Dd className={style.variacao__text} master xxxs>{variacao.descricao}</text.Dd>
    </dl>
    <text.Data className={style.variacao__data} master darker xs bold>{variacao.slave}</text.Data>
  </section>
