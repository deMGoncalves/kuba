import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import Product from './product'
import style from './style'

export default (shelf) =>
  <Story className={[style.shelf, shelf.className]}>
    <div className={style.shelf__main} >
      <Repeat iterator={shelf.products} component={Product} />
    </div>
  </Story>
