import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <>
    <Show when={tail.valor}>
      <div className={style.tail}>
        <text.Strong className={style.tail__text} master darker xs bold>Tail</text.Strong>
        <text.Span className={style.tail__text} master xxxs>Parte traseira inclinada do shape</text.Span>
      </div>
    </Show>
    <Show when={tail.pristine}>
      <div className={style.tail}>
        <text.Strong className={style.tail__text} master darker xs bold/>
        <text.Span className={style.tail__text} master xxxs />
      </div>
    </Show>
  </>
