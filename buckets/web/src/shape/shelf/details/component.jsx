import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (details) =>
  <div className={style.details}>
    <text.Label>Lixa inclusa: {details.lixa}</text.Label>
    <text.Label>Nose: {details.nose}</text.Label>
    <text.Label>Tail: {details.tail}</text.Label>
    <text.Label>Concave: {details.concave}</text.Label>
    <text.Label>Material do Shape: {details.material}</text.Label>
    <text.Label>Fabricação: {details.origem}</text.Label>
  </div>
