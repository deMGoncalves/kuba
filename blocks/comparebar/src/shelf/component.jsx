import h, { Fragment } from '@kuba/h'
import style from './style'

export default (shelf) =>
  <section className={style.shelf}>
    {shelf.shapes}
  </section>
