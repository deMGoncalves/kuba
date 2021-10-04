import h from '@kuba/h'
import Figure from '@kuba/figure'
import Show from '@kuba/show'
import text from '@kuba/text'
import redirect from './redirect'
import style from './style'

export default (category) =>
  <Figure className={style.navigation__bubble} alt={category.name} onClick={() => redirect(category)} circular>
    <Show when={category.thumbnail}>
      <source srcSet={category.thumbnail} slot='sources' />
    </Show>
    <text.Strong className={style.navigation__text} slot='caption' master darker xxxs regular>{category.name}</text.Strong>
  </Figure>
