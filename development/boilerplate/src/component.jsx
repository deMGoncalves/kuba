import h from '@kuba/h'
import style from './style'

export default (boilerplate) =>
  <div className={style.boilerplate}>{boilerplate.name}</div>
