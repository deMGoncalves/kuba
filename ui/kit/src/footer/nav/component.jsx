import h from '@rex/h'
import Link from '@rex/kit/src/link'
import style from './style.css'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <Link className={style.nav__link} href='/'>Home</Link>
    <Link className={style.nav__link} href='/stories'>Stories</Link>
    <Link className={style.nav__link} href='/features'>Features</Link>
    <Link className={style.nav__link} href='/pricing'>Pricing</Link>
  </nav>
