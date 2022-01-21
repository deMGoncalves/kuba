import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import style from './style'

export default (related) =>
  <container.Section className={style.related} empty:isTruthy={related.empty}>
    <Metro className={style.related__metro}>
      {related.shapes}
    </Metro>
  </container.Section>
