import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (thumbnail) =>
  <Picture className={style.thumbnail} alt={thumbnail.alt}>
    <source srcSet={thumbnail.src} />
  </Picture>
