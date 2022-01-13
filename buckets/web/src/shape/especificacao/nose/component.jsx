import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <>
    <Show when={nose.valor}>
      <div className={style.nose}>
        <text.Strong master darker xs medium>Nose</text.Strong>
        <text.Span master xxxs>Sim</text.Span>
      </div>
    </Show>
    <Hide when={nose.valor}>
      <div className={style.nose}>
        <text.Strong master light xs medium>Nose</text.Strong>
        <text.Span master light xxxs>Não</text.Span>
      </div>
    </Hide>
  </>
