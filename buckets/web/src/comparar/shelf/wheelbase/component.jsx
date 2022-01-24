import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (wheelbase) =>
  <text.Strong className={style.wheelbase} master darker xs medium>
    <text.Span master darker medium xs>{wheelbase.valor}</text.Span>
  </text.Strong>
