import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (lixa) =>
  <text.Strong className={style.lixa} master darker xs medium>
    <Show when={lixa.valor}>
      Lixa<br />
      <text.Span master xxxs>Sim</text.Span>
    </Show>
    <Hide when={lixa.valor}>
      -<br />
      <text.Span master xxxs>Não</text.Span>
    </Hide>
  </text.Strong>
