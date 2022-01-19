
import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'
import container from '@kuba/container'
import Show from '@kuba/show'
import Metro from '@kuba/metro'
import story from '@kuba/story'
import text from '@kuba/text'
import style from './style'

export default (related) =>
  <>
    <Show when={f.len(related.shapes)}>
      <story.Section>
        <container.Div className={style.related__container}>
          <text.H2 master darker md medium>Shapes que talvez você goste...</text.H2>
          <Metro className={style.related__metro}>
            {related.shapes}
          </Metro>
        </container.Div>
      </story.Section>
    </Show>
  </>
