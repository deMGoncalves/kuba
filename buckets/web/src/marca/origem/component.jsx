import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (origem) =>
  <>
    <Show when={origem.local}>
      <text.Label>
        <text.Strong master darker xxs>Origem:</text.Strong>
        <text.Strong className={style.origem} regular master darkest>{origem.local}</text.Strong>
      </text.Label>
    </Show>
  </>
