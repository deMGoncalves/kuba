import h from '@kuba/h'
import * as f from '@kuba/f'
import container from '@kuba/container'
import Hide from '@kuba/hide'
import Metro from '@kuba/metro'
import story from '@kuba/story'
import text from '@kuba/text'
import NoRelated from './noRelated'
import style from './style'

export default (related) =>
  <story.Section>
    <container.Div className={style.related__container}>
      <text.H2 master darker md medium>Shapes que talvez você goste...</text.H2>
      <Hide when={f.len(related.shapes)}>
        <NoRelated />
      </Hide>
      <Metro className={style.related__metro}>
        {related.shapes}
      </Metro>
    </container.Div>
  </story.Section>
