import h from '@kuba/h'
import button from '@kuba/button'
import icon from '@kuba/icon'
import style from './style'

export default (comparar) =>
  <button.naked.Master uid='compare' className={style.compare} onClick={() => comparar.add()} slot='caption' darker medium>
    Comparar
    <icon.Compare />
  </button.naked.Master>
