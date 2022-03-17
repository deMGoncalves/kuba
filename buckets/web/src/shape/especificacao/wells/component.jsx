import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (wells) =>
  <>
    <Show when={wells.valor}>
      <dl className={style.wells}>
        <text.Dt className={style.wells__text} master darker xs bold>Wheel Wells</text.Dt>
        <text.Dd className={style.wells__text} master xxxs>Poço para as rodas não encostar no shape</text.Dd>
      </dl>
    </Show>
    <Show when={wells.pristine}>
      <dl className={style.wells}>
        <text.Dt className={style.wells__text} master darker xs bold />
        <text.Dd className={style.wells__text} master xxxs />
      </dl>
    </Show>
  </>
