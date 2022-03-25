import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (simetrico) =>
  <>
    <Show when={simetrico.valor}>
      <dl className={style.simetrico}>
        <text.Dt className={style.simetrico__text} master darker xs bold>Simétrico</text.Dt>
        <text.Dd className={style.simetrico__text} master xxxs>Shape simétrico é mesmo em ambas as extremidades</text.Dd>
      </dl>
    </Show>
    <Show when={simetrico.pristine}>
      <dl className={style.simetrico}>
        <text.Dt className={style.simetrico__text} master darker xs bold />
        <text.Dd className={style.simetrico__text} master xxxs />
      </dl>
    </Show>
  </>
