import h from '@kuba/h'
import Figure from '@kuba/figure'
import Show from '@kuba/show'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style'

export default (product) =>
  <Figure className={style.shelf__product}>
    <Show when={product.thumbnails}>
      <Sources thumbnails={product.thumbnails} slot='sources' />
    </Show>
    <text.Strong className={style.shelf__strong} slot='caption' master darker xxxs regular>{product.name}</text.Strong>
  </Figure>
