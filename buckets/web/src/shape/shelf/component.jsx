import h from '@kuba/h'
import style from './style'
import Thumbnail from './thumbnail'

export default (shelf) =>
  <div className={style.shelf}>
    <Thumbnail image={shelf.image}/>
    ...
  </div>
