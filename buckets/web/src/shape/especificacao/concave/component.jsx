import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (concave) =>
  <>
    <Show when={concave.valor}>
      <div className={style.concave}>
        <text.Strong master darker sm medium>Concave</text.Strong>
        <text.Span master xxxs>Sim</text.Span>
      </div>
    </Show>
    <Hide when={concave.valor}>
      <div className={style.concave}>
        <text.Strong master light sm medium>Concave</text.Strong>
        <text.Span master light xxxs>Não</text.Span>
      </div>
    </Hide>

  </>
