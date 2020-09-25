import h from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <ui.Link className={style.nav__link} href='/'>Home</ui.Link>
    <ui.Link className={style.nav__link} href='/stories'>Stories</ui.Link>
    <ui.Link className={style.nav__link} href='/features'>Features</ui.Link>
    <ui.Link className={style.nav__link} href='/pricing'>Pricing</ui.Link>
  </nav>
