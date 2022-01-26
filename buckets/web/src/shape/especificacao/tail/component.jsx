import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <>
    <Show when={tail.valor}>
      <div className={style.tail}>
        <text.Strong className={style.tail__text} master darker xxs bold>Tail</text.Strong>
        <text.Span className={style.tail__text} master xxxs>Parte traseira inclinada do shape</text.Span>
      </div>
    </Show>
    <Hide when={tail.valor}>
      <div className={style.tail}>
        <text.Strong className={style.tail__text} master darker xxs bold/>
        <text.Span className={style.tail__text} master xxxs />
      </div>
    </Hide>
  </>
