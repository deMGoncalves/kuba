import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Link from './link'
import style from './style'

export default (darlings) =>
  <darlings className={[style.darlings, darlings.className]}>
    <Repeat iterator={darlings.links} component={Link} />
  </darlings>
