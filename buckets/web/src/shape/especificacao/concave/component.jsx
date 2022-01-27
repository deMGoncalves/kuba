import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <>
    <Show when={concave.valor}>
      <div className={style.concave}>
        <text.Strong className={style.concave__text} master darker xs bold>Concave</text.Strong>
        <text.Span className={style.concave__text} master xxxs>Inclinação simétrica das laterais do shape</text.Span>
      </div>
    </Show>
    <Show when={concave.pristine}>
      <div className={style.concave}>
        <text.Strong className={style.concave__text} master darker xs bold/>
        <text.Span className={style.concave__text} master xxxs />
      </div>
    </Show>
  </>
