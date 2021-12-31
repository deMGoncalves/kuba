import h from '@kuba/h'
import style from './style'

export default (shape) =>
  <div className={style.shape}>{shape.name}</div>
