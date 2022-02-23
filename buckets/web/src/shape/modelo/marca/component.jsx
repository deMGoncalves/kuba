import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (marca) =>
  <div uid='marca' className={style.marca}>
    <Show when={marca.pro}>
      <text.Strong className={style.marca__pro} master lightest xxxs medium>Pro Model</text.Strong>
    </Show>
    <text.Strong master darker xxxs medium>{marca.valor}</text.Strong>
  </div>
