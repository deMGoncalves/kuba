import container from '@kuba/container'
import h from '@kuba/h'
import Laminas from './laminas'
import Repeat from '@kuba/repeat'
import style from './style'
import Tag from './tag'
import text from '@kuba/text'

export default (material) =>
  <container.Section className={style.material}>
    <hgroup className={style.material__hgroup}>
      <text.H2 className={style.material__h2} master darker xs medium>Material</text.H2>
      <Laminas />
    </hgroup>
    <div className={style.material__div}>
      <Repeat iterator={material.valor} component={Tag} />
    </div>
  </container.Section>
