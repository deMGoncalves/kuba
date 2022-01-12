import h from '@kuba/h'
import button from '@kuba/button'
import icon from '@kuba/icon'
import style from './style'

export default () =>
  <section className={style.comparar}>
    <button.naked.Master darker medium>Comparar <icon.Compare /></button.naked.Master>
  </section>
