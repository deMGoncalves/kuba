import h from '@kuba/h'
import style from './style'

export default (shelf) =>
  <main className={style.shelf}>
    {shelf.shapes}
  </main>
