import h from '@kuba/h'
import style from './style'

export default (tags) =>
  <div className={style.tags}>
    {tags.filters}
  </div>
