import container from '@kuba/container'
import h from '@kuba/h'
import Metro from '@kuba/metro'
import style from './style'
import text from '@kuba/text'

export default (relacionado) =>
  <container.Section className={style.relacionado} empty:isTruthy={relacionado.empty}>
    <text.H3 className={style.relacionado__h3} master darker md bold>Shapes parecidos</text.H3>
    <Metro className={style.relacionado__metro}>
      {relacionado.shapes}
    </Metro>
  </container.Section>
