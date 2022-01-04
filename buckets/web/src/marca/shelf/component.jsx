import h from '@kuba/h'
import style from './style'

export default (shelf) =>
  <div className={style.shelf}>{shelf.name}</div>
