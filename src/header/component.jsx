import h from '@h'
import Logo from './logo'
import Nav from './nav'
import style from './style.css'

export default () =>
  <header className={style.header}>
    <div className={style.header__container}>
      <Logo className={style.header__logo} />
      <Nav className={style.header__nav} />
    </div>
  </header>
