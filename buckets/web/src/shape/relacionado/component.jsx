import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import story from '@kuba/story'
import style from './style'

export default (relacionado) =>
  <story.Section className={style.relacionado}>
    <container.Div empty:isTruthy={relacionado.empty}>
      <Metro className={style.relacionado__metro}>
        {relacionado.shapes}
      </Metro>
    </container.Div>
  </story.Section>
