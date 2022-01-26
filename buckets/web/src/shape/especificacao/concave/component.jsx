import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <>
    <Show when={concave.valor}>
      <div className={style.concave}>
        <text.Strong className={style.concave__text} master darker xxs bold>Concave</text.Strong>
        <text.Span className={style.concave__text} master xxxs>Inclinação simétrica das laterais do shape</text.Span>
      </div>
    </Show>
    <Hide when={concave.valor}>
      <div className={style.concave}>
        <text.Strong className={style.concave__text} master darker xxs bold/>
        <text.Span className={style.concave__text} master xxxs />
      </div>
    </Hide>
  </>
