import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default () =>
  <text.Label className={style.laminas__text}>
    <text.Strong regular xs>Laminas:</text.Strong>
    <text.Span className={style.laminas__paragraph} medium small>...</text.Span>
  </text.Label>
