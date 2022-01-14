import h from '@kuba/h'
import button from '@kuba/button'
import icon from '@kuba/icon'
import style from './style'

export default (comparar) =>
  <section className={style.comparar}>
    <button.naked.Master onClick={() => comparar.add()} darker medium>
      Comparar
      <icon.Compare />
    </button.naked.Master>
  </section>
