import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Link from './link'
import style from './style'

export default (nav) =>
  <nav slot={nav.slot}>
    <span className={style.nav__span}>Aliquam a metus erat</span>
    <ol className={style.nav__ol}>
      <Repeat iterator={nav.nav} component={Link} />
    </ol>
    <span className={style.nav__span}>Proin vehicula sapien sed</span>
    <ol className={style.nav__ol}>
      <Repeat iterator={nav.darlings} component={Link} />
    </ol>
  </nav>
