import h from '@kuba/h'
import style from './style'
import icon from '@kuba/icon'

export default (search) =>
  <button className={style.button} onClick={() => search.openSearch()}>
    <icon.Search />
  </button>
