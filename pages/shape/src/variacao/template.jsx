import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (variacao) =>
  <section className={style.variacao__section}>
    <text.Data master darker xs bold>{variacao.valor}</text.Data>
    <dl className={style.variacao__dl}>
      <text.Dt className={style.variacao__text} master darker xxxs medium>{variacao.nome}</text.Dt>
      <text.Dd className={style.variacao__text} master xxxs>{variacao.descricao}</text.Dd>
    </dl>
  </section>
