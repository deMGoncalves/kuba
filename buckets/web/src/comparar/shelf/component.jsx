import h from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import style from './style'

export default (shelf) =>
  <story.Section>
    <container.Div className={style.shelf__div}>
        {shelf.thumbnail}
        {shelf.modelo}
    </container.Div>
  </story.Section>
