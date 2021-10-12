import h from '@kuba/h'
import link from '@kuba/link'
import Repeat from '@kuba/repeat'
import { urlFor } from '@kuba/router'
import Link from './link'
import style from './style'

export default (nav) =>
  <nav slot={nav.slot}>
    <span className={style.nav__span}>Aliquam a metus erat</span>
    <ol className={style.nav__ol}>
      <li className={style.nav__li}>
        <link.Master className={style.nav__link} href={urlFor('home')}>Home</link.Master>
      </li>
      <Repeat iterator={nav.nav} component={Link} />
    </ol>
    <span className={style.nav__span}>Proin vehicula sapien sed</span>
    <ol className={style.nav__ol}>
      <Repeat iterator={nav.darlings} component={Link} />
    </ol>
  </nav>
