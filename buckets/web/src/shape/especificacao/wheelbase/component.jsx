import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (wheelbase) =>
  <div className={style.wheelbase}>
    <text.Strong master darker sm medium>{wheelbase.valor}</text.Strong>
    <text.Span master xxxs>Wheelbase</text.Span>
  </div>
