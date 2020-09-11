import h, { Fragment } from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default (nav) =>
  <>
    <button className={[style.nav__toggle, style[nav.status]]} onClick_prevent_stop={() => nav.toggle()}>Menu</button>
    <div className={[style.nav, style[nav.status]]}>
      <c.Link className={style.nav__link} href='/stories'>Stories</c.Link>
      <c.Link className={style.nav__link} href='/features'>Features</c.Link>
      <c.Link className={style.nav__link} href='/pricing'>Pricing</c.Link>
    </div>
    <c.Button className={[style.nav__button, style[nav.status]]} href='/'>Get in invite</c.Button>
  </>
