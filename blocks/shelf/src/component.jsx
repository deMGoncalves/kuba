import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import text from '@kuba/text'
import Product from './product'
import style from './style'

export default (shelf) =>
  <Story className={[style.shelf, shelf.className]}>
    <text.H2 className={style.inspiration__h2} master darker sm medium>{shelf.title}</text.H2>
    <div className={style.shelf__main} >
      <Repeat iterator={shelf.products} component={Product} />
    </div>
  </Story>
