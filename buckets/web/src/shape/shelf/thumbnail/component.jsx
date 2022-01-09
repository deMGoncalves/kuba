import h from '@kuba/h'
import style from './style'

export default (thumbnail) =>
  <figure className={style.shelf__picture}>
    <img srcSet={thumbnail.image}/>
  </figure>
