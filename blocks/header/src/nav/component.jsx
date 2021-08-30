import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Link from './link'
import style from './style'

export default (nav) =>
  <nav className={[style.nav, nav.className]}>
    <Repeat iterator={nav.links} component={Link} />
  </nav>
