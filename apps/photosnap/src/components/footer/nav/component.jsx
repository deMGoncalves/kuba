import h from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default () =>
  <nav className={style.nav}>
    <c.Link className={style.nav__link} href='/'>Home</c.Link>
    <c.Link className={style.nav__link} href='/stories'>Stories</c.Link>
    <c.Link className={style.nav__link} href='/features'>Features</c.Link>
    <c.Link className={style.nav__link} href='/pricing'>Pricing</c.Link>
  </nav>
