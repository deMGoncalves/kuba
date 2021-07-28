import h from '@kuba/h'
import icon from '@kuba/icon'
import style from './style'

export default (search) =>
  <form className={[style.search, search.className]} action={search.action}>
    <input className={style.search__input} autocomplete='off' name='q' placeholder={search.placeholder} type='search' />
    <button className={style.search__button}>
      <icon.Search className={style.search__icon} alt='search' />
    </button>
  </form>
