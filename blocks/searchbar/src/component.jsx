import button from '@kuba/button'
import container from '@kuba/container'
import h, { Fragment } from '@kuba/h'
import style from './style'

export default (searchbar) =>
  <>
    <section className={style.searchbar} onClick:stop={() => null} opened:isTruthy={searchbar.opened}>
      <container.Div className={style.searchbar__div}>
        <form className={style.searchbar__form} action={searchbar.action} method='GET'>
          <input className={style.searchbar__input} placeholder={searchbar.placeholder} name='q' type='search' autocomplete='off' required />
        </form>
        <button.icon.Close onClick:prevent={() => searchbar.close()} />
      </container.Div>
    </section>
    <div className={style.searchbar__overlayer} onClick={() => searchbar.close()} opened:isTruthy={searchbar.opened} />
  </>
