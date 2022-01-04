import h from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import style from './style'

export default (shelf) =>
  <story.Section>
    <container.Div>
      <div className={style.shelf}>{shelf.name}</div>
    </container.Div>
  </story.Section>
