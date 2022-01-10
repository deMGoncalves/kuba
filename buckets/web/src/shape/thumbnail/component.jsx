import h from '@kuba/h'
import style from './style'

export default (thumbnail) =>
  <picture className={style.thumbnail} alt={thumbnail.alt}>
    <img srcSet={thumbnail.src} />
  </picture>
