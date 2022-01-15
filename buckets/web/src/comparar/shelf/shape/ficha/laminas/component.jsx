import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default () =>
  <div className={style.laminas}>
    <text.Label className={style.laminas__text}>
      <text.Strong regular xs>Laminas:</text.Strong>
      <text.Span medium xs>...</text.Span>
    </text.Label>
  </div>
