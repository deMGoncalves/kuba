import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')}>In finibus</link.Master>
    <link.Master className={style.nav__link} href={urlFor('home')}>Donec suscipit</link.Master>
    <link.Master className={style.nav__link} href={urlFor('home')}>Aenean mollis</link.Master>
  </nav>
