import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (material) =>
  <div className={style.material} onClick={() => material.toggle()} selected:isTruthy={material.selected}>
    <text.Strong master darker xxxs medium>{material.valor}</text.Strong>
  </div>
