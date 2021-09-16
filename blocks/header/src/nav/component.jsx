import h from '@kuba/h'
import link from '@kuba/link'
import Repeat from '@kuba/repeat'
import { urlFor } from '@kuba/router'
import Departament from './departament'
import style from './style'

export default (nav) =>
  <nav className={[style.nav, nav.className]}>
    <link.Master className={style.nav__home} href={urlFor('home')}>Home</link.Master>
    <Repeat iterator={nav.links} component={Departament} />
  </nav>
