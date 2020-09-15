import h from '@rex/h'
import * as c from '@components'
import Nav from './nav'
import style from './style.css'

export default () =>
  <header className={style.header}>
    <div className={style.header__container}>
      <c.Logo className={style.header__logo} />
      <Nav className={style.header__nav} />
    </div>
  </header>
