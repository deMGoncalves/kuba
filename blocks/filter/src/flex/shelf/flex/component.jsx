import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (flex) =>
  <div className={style.flex} onClick={() => flex.toggle()} selected:isTruthy={flex.selected}>
    <text.Strong master darker xxxs medium>{flex.valor}</text.Strong>
  </div>
