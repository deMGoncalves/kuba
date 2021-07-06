import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav {...props} className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')} master darker small>Home</link.Master>
    <link.Master className={style.nav__link} href={urlFor('cadeiras')} master darker small>Cadeiras</link.Master>
    <link.Master className={style.nav__link} href={urlFor('sofás')} master darker small>Sofás</link.Master>
    <link.Master className={style.nav__link} href={urlFor('acessórios')} master darker small>Acessórios</link.Master>
  </nav>
