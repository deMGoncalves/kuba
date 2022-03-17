import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (flex) =>
  <>
    <Show when={flex.valor}>
      <dl className={style.flex}>
        <text.Dt className={style.flex__text} master darker xs bold>{flex.valor}</text.Dt>
        <text.Dd className={style.flex__text} master xxxs>Nível de flexibilidade do shape</text.Dd>
      </dl>
    </Show>
    <Show when={flex.pristine}>
      <dl className={style.flex}>
        <text.Dt className={style.flex__text} master darker xs bold />
        <text.Dd className={style.flex__text} master xxxs />
      </dl>
    </Show>
  </>
