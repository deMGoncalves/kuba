import h from '@kuba/h'
import Bubble from '@kuba/bubble'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (category) =>
  <Bubble className={style.navigation__bubble} alt={category.title} onClick={() => location.assign(category.url)}>
    <Show when={category.thumbnail}>
      <source srcSet={category.thumbnail} slot='sources' />
    </Show>
    <text.Strong className={style.navigation__text} slot='caption' master darker xxxs regular>{category.title}</text.Strong>
  </Bubble>
