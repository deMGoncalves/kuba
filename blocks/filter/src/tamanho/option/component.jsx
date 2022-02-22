import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (option) =>
  <div className={style.option} onClick={() => option.toggle()} selected:isTruthy={option.selected}>
    <text.Strong master darker xxxs medium>{option.valor}"</text.Strong>
  </div>
