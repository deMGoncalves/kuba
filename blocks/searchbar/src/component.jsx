import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import container from '@kuba/container'
import style from './style'

export default (searchbar) =>
  <>
    <section className={style.searchbar} onClick:stop={() => null} opened:isTruthy={searchbar.opened}>
      <container.Form className={style.searchbar__form} action={searchbar.action} method='GET'>
        <input className={style.searchbar__input} placeholder={searchbar.placeholder} name='q' type='search' />
        <button.icon.Close onClick:prevent={() => searchbar.close()} />
      </container.Form>
    </section>
    <div className={style.searchbar__overlayer} onClick={() => searchbar.close()} opened:isTruthy={searchbar.opened} />
  </>
