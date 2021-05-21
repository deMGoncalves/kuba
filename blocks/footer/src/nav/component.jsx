import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')} darker small>Home</link.Master>
  </nav>
