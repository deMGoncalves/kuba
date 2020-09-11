import h, { Fragment } from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default () =>
  <>
    <button className={style.nav__toggle} onClick_prevent_stop={(e) => e.target.classList.toggle(style.opened)}>Menu</button>
    <nav className={style.nav}>
      <c.Link className={style.nav__link} href='/stories'>Stories</c.Link>
      <c.Link className={style.nav__link} href='/features'>Features</c.Link>
      <c.Link className={style.nav__link} href='/pricing'>Pricing</c.Link>
    </nav>
    <c.Button className={style.nav__button} href='/'>Get in invite</c.Button>
  </>
