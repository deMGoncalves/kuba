import h from '@kuba/h'
import container from '@kuba/container'
import Repeat from '@kuba/repeat'
import text from '@kuba/text'
import Laminas from './laminas'
import Tag from './tag'
import style from './style'

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
