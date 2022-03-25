import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (montagem) =>
  <>
    <Show when={montagem.valor}>
      <dl className={style.montagem}>
        <text.Dt className={style.montagem__text} master darker xs bold>{montagem.valor}</text.Dt>
        <text.Dd className={style.montagem__text} master xxxs>A maneira como o truck é anexado ao shape</text.Dd>
      </dl>
    </Show>
    <Show when={montagem.pristine}>
      <dl className={style.montagem}>
        <text.Dt className={style.montagem__text} master darker xs bold />
        <text.Dd className={style.montagem__text} master xxxs />
      </dl>
    </Show>
  </>
