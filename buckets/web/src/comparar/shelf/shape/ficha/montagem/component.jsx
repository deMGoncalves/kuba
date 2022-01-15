import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (montagem) =>
  <text.Label className={style.montagem}>
    <text.Strong regular xs>Montagem:</text.Strong>
    <text.Span medium xs>{montagem.valor}</text.Span>
  </text.Label>
