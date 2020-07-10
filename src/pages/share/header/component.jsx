import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default () =>
  <header className={style.header}>
    <s.Container className={style.header__container}>
      <a className={style.header__menu} href='#'>Menu</a>
      <a className={style.header__apple} href='#'>Apple</a>
      <nav className={style.header__nav}>
        {
          ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Suporte'].map(text =>
            <a className={style.header__link} href='#'>{ text }</a>)
        }
        <a className={style.header__search} href='#'>Search</a>
      </nav>
      <a className={style.header__bag} href='#'>Bag</a>
    </s.Container>
  </header>
