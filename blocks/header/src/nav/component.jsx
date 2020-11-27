import h, { Fragment } from '@rex/h'
import { urlFor } from '@rex/router'
import Button from '@rex/button'
import Link from '@rex/link'
import style from './style.css'

export default () =>
  <>
    <button className={style.nav__toggle} onClick_prevent_stop={(e) => e.target.classList.toggle(style.opened)}>Menu</button>
    <nav className={style.nav}>
      <Link className={style.nav__link} href={urlFor('stories')}>Stories</Link>
      <Link className={style.nav__link} href={urlFor('features')}>Features</Link>
      <Link className={style.nav__link} href={urlFor('pricing')}>Pricing</Link>
    </nav>
    <Button className={style.nav__button} href='/'>Get in invite</Button>
  </>
