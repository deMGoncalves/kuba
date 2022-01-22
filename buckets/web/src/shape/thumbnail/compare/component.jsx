import h from '@kuba/h'
import button from '@kuba/button'
import icon from '@kuba/icon'
import style from './style'

export default (comparar) =>
  <div className={style.compare} uid='compare' slot='caption'>
    <button.naked.Master className={style.compare__button} onClick={() => comparar.add()} darker medium>
      Comparar
      <icon.Compare />
    </button.naked.Master>
  </div>
