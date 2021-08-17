import h from '@kuba/h'
import Metro from '@kuba/metro'
import style from './style'

export default (filter) =>
  <section className={style.filter}>
    <Metro className={style.filter__metro}>
      {filter.selects}
    </Metro>
  </section>
