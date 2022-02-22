import h from '@kuba/h'
import style from './style'

export default (tags) =>
  <div className={style.tags} len:isTruthy={tags.len}>
    {tags.filters}
  </div>
