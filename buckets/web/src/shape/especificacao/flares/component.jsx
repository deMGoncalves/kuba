import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (flares) =>
  <>
    <Show when={flares.valor}>
      <dl className={style.flares}>
        <text.Dt className={style.flares__text} master darker xs bold>Wheel Flares</text.Dt>
        <text.Dd className={style.flares__text} master xxxs>Onda no shape acima da roda para evitar que encostem</text.Dd>
      </dl>
    </Show>
    <Show when={flares.pristine}>
      <dl className={style.flares}>
        <text.Dt className={style.flares__text} master darker xs bold/>
        <text.Dd className={style.flares__text} master xxxs />
      </dl>
    </Show>
  </>
