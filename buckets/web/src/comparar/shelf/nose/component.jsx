import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <text.Strong className={style.nose} master darker xs medium>
    <Show when={nose.valor}>
      Nose<br />
      <text.Span master xxxs>Sim</text.Span>
    </Show>
    <Hide when={nose.valor}>
      -<br />
      <text.Span master light xxxs>Não</text.Span>
    </Hide>
  </text.Strong>
