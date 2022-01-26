import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <>
    <Show when={nose.valor}>
      <div className={style.nose}>
        <text.Strong className={style.nose__text} master darker xxs bold>Nose</text.Strong>
        <text.Span className={style.nose__text} master xxxs>Parte frontal inclinada do shape</text.Span>
      </div>
    </Show>
    <Hide when={nose.valor}>
      <div className={style.nose}>
        <text.Strong className={style.nose__text} master darker xxs bold/>
        <text.Span className={style.nose__text} master xxxs />
      </div>
    </Hide>
  </>
