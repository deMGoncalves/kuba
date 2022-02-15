import h from '@kuba/h'
import style from './style'

export default (filter) =>
  <div className={style.filter}>{filter.name}</div>
