import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <text.Label className={style.tamanho}>
    <text.Strong regular xs>Tamanho:</text.Strong>
    <text.Span medium xs>{tamanho.valor}</text.Span>
  </text.Label>
