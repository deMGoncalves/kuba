import h, { Fragment } from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (thumbnail) =>
<>
  <Picture className={style.thumbnail} height='920' width='736'>
    <source srcSet={thumbnail.master} />
  </Picture>
  <Picture className={style.thumbnail} height='920' width='736'>
    <source srcSet={thumbnail.slave} />
  </Picture>
</>
