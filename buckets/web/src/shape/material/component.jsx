import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Tag from './tag'
import style from './style'

export default (material) =>
  <section className={style.material}>
    <Repeat iterator={material.valor} component={Tag} />
  </section>
