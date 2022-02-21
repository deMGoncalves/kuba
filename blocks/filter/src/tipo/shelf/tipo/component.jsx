import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tipo) =>
  <div className={style.tipo} onClick={() => tipo.toggle()} selected:isTruthy={tipo.selected}>
    <text.Strong master darker xxxs medium>{tipo.valor}</text.Strong>
  </div>
