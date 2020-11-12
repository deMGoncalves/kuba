import h, { Fragment } from '@rex/h'
import { urlFor } from '@rex/router'
import * as ui from '@ui'
import style from './style.css'

export default () =>
  <>
    <button className={style.nav__toggle} onClick_prevent_stop={(e) => e.target.classList.toggle(style.opened)}>Menu</button>
    <nav className={style.nav}>
      <ui.Link className={style.nav__link} href={urlFor('stories')}>Stories</ui.Link>
      <ui.Link className={style.nav__link} href={urlFor('features')}>Features</ui.Link>
      <ui.Link className={style.nav__link} href={urlFor('pricing')}>Pricing</ui.Link>
    </nav>
    <ui.Button className={style.nav__button} href='/'>Get in invite</ui.Button>
  </>
