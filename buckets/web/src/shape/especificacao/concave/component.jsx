import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <>
    <Show when={concave.valor}>
      <dl className={style.concave}>
        <text.Dt className={style.concave__text} master darker xs bold>Concave</text.Dt>
        <text.Dd className={style.concave__text} master xxxs>Inclinação simétrica das laterais do shape</text.Dd>
      </dl>
    </Show>
    <Show when={concave.pristine}>
      <dl className={style.concave}>
        <text.Dt className={style.concave__text} master darker xs bold />
        <text.Dd className={style.concave__text} master xxxs />
      </dl>
    </Show>
  </>
