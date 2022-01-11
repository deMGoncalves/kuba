import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (lixa) =>
  <>
    <Show when={lixa.valor}>
      <div className={style.lixa}>
        <text.Strong master darker sm medium>Lixa</text.Strong>
        <text.Span master xxxs>Sim</text.Span>
      </div>
    </Show>
    <Hide when={lixa.valor}>
      <div className={style.lixa}>
        <text.Strong master light sm medium>Lixa</text.Strong>
        <text.Span master light xxxs>Não</text.Span>
      </div>
    </Hide>
  </>
