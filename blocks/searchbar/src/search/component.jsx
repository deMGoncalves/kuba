import h from '@kuba/h'
import style from './style'
import button from '@kuba/button'

export default (search) =>
  <button.icon.Search
    className={style.button}
    onClick={() => search.openSearch()}
  />
