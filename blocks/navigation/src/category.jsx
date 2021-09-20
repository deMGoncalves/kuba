import h from '@kuba/h'
import Bubble from '@kuba/bubble'
import { urlFor } from '@kuba/router'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (category) =>
  <Bubble className={style.navigation__bubble} alt={category.name} onClick={() => location.assign(urlFor('category', { departament: 'women', category: category.link_rewrite }))}>
    <Show when={category.thumbnail}>
      <source srcSet={category.thumbnail} slot='sources' />
    </Show>
    <text.Strong className={style.navigation__text} slot='caption' master darker xxxs regular>{category.name}</text.Strong>
  </Bubble>
