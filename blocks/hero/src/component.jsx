import h from '@kuba/h'
import style from './style'

export default (hero) =>
  <div className={style.hero}>{hero.name}</div>
