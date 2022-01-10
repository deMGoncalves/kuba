import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (details) =>
  <div className={style.details}>
    <text.Label>Material do Shape: {details.material}</text.Label>
    <text.Label>Fabricação: {details.origem}</text.Label>
  </div>
