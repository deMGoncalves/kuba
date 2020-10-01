import h, { Fragment } from '@rex/h'
import Button from '@rex/kit/src/button'
import Link from '@rex/kit/src/link'
import style from './style.css'

export default () =>
  <>
    <button className={style.nav__toggle} onClick_prevent_stop={(e) => e.target.classList.toggle(style.opened)}>Menu</button>
    <nav className={style.nav}>
      <Link className={style.nav__link} href='/stories'>Stories</Link>
      <Link className={style.nav__link} href='/features'>Features</Link>
      <Link className={style.nav__link} href='/pricing'>Pricing</Link>
    </nav>
    <Button className={style.nav__button} href='/'>Get in invite</Button>
  </>
