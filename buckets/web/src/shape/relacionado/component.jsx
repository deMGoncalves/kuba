import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import style from './style'

export default (relacionado) =>
  <container.Section className={style.relacionado} empty:isTruthy={relacionado.empty}>
    <Metro className={style.relacionado__metro}>
      {relacionado.shapes}
    </Metro>
  </container.Section>
