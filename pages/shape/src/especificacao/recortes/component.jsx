import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (recortes) =>
  <>
    <Show when={recortes.valor}>
      <dl className={style.recortes}>
        <text.Dt className={style.recortes__text} master darker xs bold>Cut-outs</text.Dt>
        <text.Dd className={style.recortes__text} master xxxs>Recorte ao redor das rodas do shape</text.Dd>
      </dl>
    </Show>
    <Show when={recortes.pristine}>
      <dl className={style.recortes}>
        <text.Dt className={style.recortes__text} master darker xs bold />
        <text.Dd className={style.recortes__text} master xxxs />
      </dl>
    </Show>
  </>
