import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (especificacao) =>
  <>
    <Show when={especificacao.valor}>
      <dl className={style.especificacao__dl}>
        <text.Dt className={style.especificacao__text} master darker xs bold>{especificacao.nome}</text.Dt>
        <text.Dd className={style.especificacao__text} master xxxs>{especificacao.descricao}</text.Dd>
      </dl>
    </Show>
    <Show when={especificacao.pristine}>
      <dl className={style.especificacao__dl}>
        <text.Dt className={style.especificacao__text} master darker xs bold />
        <text.Dd className={style.especificacao__text} master xxxs />
      </dl>
    </Show>
  </>
