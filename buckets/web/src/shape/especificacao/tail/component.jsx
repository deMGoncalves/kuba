import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (tail) =>
  <>
    <Show when={tail.valor}>
      <dl className={style.tail}>
        <text.Dt className={style.tail__text} master darker xs bold>Tail</text.Dt>
        <text.Dd className={style.tail__text} master xxxs>Parte traseira inclinada do shape</text.Dd>
      </dl>
    </Show>
    <Show when={tail.pristine}>
      <dl className={style.tail}>
        <text.Dt className={style.tail__text} master darker xs bold/>
        <text.Dd className={style.tail__text} master xxxs />
      </dl>
    </Show>
  </>
