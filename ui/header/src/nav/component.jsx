import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default () =>
  <>
    <button className={style.nav__toggle} onClick_prevent_stop={(e) => e.target.classList.toggle(style.opened)}>Menu</button>
    <nav className={style.nav}>
      <ui.Link className={style.nav__link} href='/stories'>Stories</ui.Link>
      <ui.Link className={style.nav__link} href='/features'>Features</ui.Link>
      <ui.Link className={style.nav__link} href='/pricing'>Pricing</ui.Link>
    </nav>
    <ui.Button className={style.nav__button} href='/'>Get in invite</ui.Button>
  </>
