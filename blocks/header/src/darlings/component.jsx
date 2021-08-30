import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Link from './link'
import style from './style'

export default (darlings) =>
  <nav className={[style.darlings, darlings.className]}>
    <Repeat iterator={darlings.links} component={Link} />
  </nav>
