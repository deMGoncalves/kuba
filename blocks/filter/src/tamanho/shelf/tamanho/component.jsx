import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <div className={style.tamanho} onClick={() => tamanho.toggle()} selected:isTruthy={tamanho.selected}>
    <text.Strong master darker xxs medium>{tamanho.valor}"</text.Strong>
  </div>
