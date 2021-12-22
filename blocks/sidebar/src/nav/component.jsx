import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Link from './link'
import schema from './schema.json'
import style from './style'

export default () =>
  <nav className={style.nav}>
    <Repeat iterator={schema} component={Link} />
  </nav>
