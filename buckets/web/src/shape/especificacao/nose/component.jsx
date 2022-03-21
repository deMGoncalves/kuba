import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (nose) =>
  <>
    <Show when={nose.valor}>
      <dl className={style.nose}>
        <text.Dt className={style.nose__text} master darker xs bold>Nose</text.Dt>
        <text.Dd className={style.nose__text} master xxxs>Parte frontal inclinada do shape</text.Dd>
      </dl>
    </Show>
    <Show when={nose.pristine}>
      <dl className={style.nose}>
        <text.Dt className={style.nose__text} master darker xs bold/>
        <text.Dd className={style.nose__text} master xxxs />
      </dl>
    </Show>
  </>
