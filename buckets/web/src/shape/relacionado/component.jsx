import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import text from '@kuba/text'
import style from './style'

export default (relacionado) =>
  <container.Section className={style.relacionado} empty:isTruthy={relacionado.empty}>
    <text.H3 className={style.relacionado__h3} master darker md bold>Shapes parecidos</text.H3>
    <Metro className={style.relacionado__metro}>
      {relacionado.shapes}
    </Metro>
  </container.Section>
