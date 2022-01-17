import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (wheelbase) =>
  <text.Strong className={style.wheelbase} master darker xs medium>
    {wheelbase.valor}<br />
    <text.Span master xxxs>Wheelbase</text.Span>
  </text.Strong>
