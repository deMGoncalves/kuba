import h from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import style from './style'

export default (related) =>
  <story.Section>
    <container.Div className={style.related__container}>
      {related.shapes}
    </container.Div>
  </story.Section>
