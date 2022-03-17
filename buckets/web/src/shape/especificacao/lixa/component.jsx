import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (lixa) =>
  <>
    <Show when={lixa.valor}>
      <dl className={style.lixa}>
        <text.Dt className={style.lixa__text} master darker xs bold>Lixa</text.Dt>
        <text.Dd className={style.lixa__text} master xxxs>{lixa.valor}</text.Dd>
      </dl>
    </Show>
    <Show when={lixa.pristine}>
      <dl className={style.lixa}>
        <text.Dt className={style.lixa__text} master darker xs bold />
        <text.Dd className={style.lixa__text} master xxxs />
      </dl>
    </Show>
  </>
