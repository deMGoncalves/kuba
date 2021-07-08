import h, { Repeat } from '@kuba/h'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import Story from '@kuba/story'
import text from '@kuba/text'
import Product from './product'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <Story {...props} className={[style.inspiration, props.className]}>
    <text.H2 className={style.inspiration__h2} master darker large>{schema.title}</text.H2>
    <div className={style.inspiration__main}>
      <Picture className={style.inspiration__picture}>
        <Sources thumbnails={schema.thumbnails} />
      </Picture>
      <Repeat iterator={schema.products} component={Product} />
    </div>
  </Story>
