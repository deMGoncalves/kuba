import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (laminas) =>
  <div className={style.laminas}>
    <text.Label className={style.laminas__text}>
      <text.Strong regular xs>Laminas:</text.Strong>
      <text.Span medium xs>{laminas.valor}</text.Span>
    </text.Label>
  </div>
