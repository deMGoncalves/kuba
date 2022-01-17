import h from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import style from './style'

export default (shelf) =>
  <story.Section>
    <container.Div className={style.shelf__div}>
        {shelf.shapes}
    </container.Div>
  </story.Section>
