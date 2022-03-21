import container from '@kuba/container'
import h from '@kuba/h'
import Metro from '@kuba/metro'
import style from './style'
import text from '@kuba/text'

export default (pro) =>
  <container.Section className={style.pro} empty:isTruthy={pro.empty}>
    <text.H2 className={style.pro__h2} master darker md bold>Pro Model</text.H2>
    <Metro className={style.pro__metro}>
      {pro.shapes}
    </Metro>
  </container.Section>
