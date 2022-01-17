import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <text.Strong className={style.concave} master darker xs medium>
    <Show when={concave.valor}>
      Concave<br />
      <text.Span master xxxs>Sim</text.Span>
    </Show>
    <Hide when={concave.valor}>
      -<br />
      <text.Span master xxxs>Não</text.Span>
    </Hide>
  </text.Strong>
