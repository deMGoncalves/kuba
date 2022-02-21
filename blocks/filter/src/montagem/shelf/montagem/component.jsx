import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (montagem) =>
  <div className={style.montagem} onClick={() => montagem.toggle()} selected:isTruthy={montagem.selected}>
    <text.Strong master darker xxxs medium>{montagem.valor}</text.Strong>
  </div>
