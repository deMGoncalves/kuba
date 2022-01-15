import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (marca) =>
  <text.Label className={style.marca}>
    <text.Strong regular xs>Marca:</text.Strong>
    <text.Span medium xs>{marca.valor}</text.Span>
  </text.Label>
