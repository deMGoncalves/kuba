import h from '@kuba/h'
import Show from '@kuba/show'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style'

export default (shelf) =>
  <Story className={[style.shelf, shelf.className]}>
    <Show when={shelf.title}>
      <text.H2 className={style.inspiration__h2} master darker sm medium>{shelf.title}</text.H2>
    </Show>
    <div className={style.shelf__main} >
      {shelf.products}
    </div>
  </Story>
