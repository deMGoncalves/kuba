import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tipo) =>
  <text.Label className={style.tipo}>
    <text.Strong regular xs>Tipo:</text.Strong>
    <text.Span medium xs>{tipo.valor}</text.Span>
  </text.Label>
