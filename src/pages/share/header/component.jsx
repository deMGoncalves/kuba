import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default () =>
  <header className={style.header}>
    <s.Container className={style.header__container}>
      <a className={style.header__menu}>Menu</a>
      <a className={style.header__apple}>Apple</a>
      <nav className={style.header__nav}>
        <a className={style.header__search}>Search</a>
      </nav>
      <a className={style.header__bag}>Bag</a>
    </s.Container>
  </header>
