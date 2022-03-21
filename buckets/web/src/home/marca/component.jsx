import container from '@kuba/container'
import h from '@kuba/h'
import Metro from '@kuba/metro'
import style from './style'
import text from '@kuba/text'

export default (material) =>
  <container.Section className={style.material} empty:isTruthy={material.empty}>
    <text.H2 className={style.material__h2} master darker md bold>{material.valor}</text.H2>
    <Metro className={style.material__metro}>
      {material.shapes}
    </Metro>
  </container.Section>
