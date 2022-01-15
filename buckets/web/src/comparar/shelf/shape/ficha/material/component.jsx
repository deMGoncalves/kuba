import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (material) =>
  <text.Label className={style.material}>
    <text.Strong regular xs>Material:</text.Strong>
    <text.Span medium xs>{material.valor}</text.Span>
  </text.Label>
