import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')} darker small>home</link.Master>
    <link.Master className={style.nav__link} href={urlFor('cadeiras')} darker small>cadeiras</link.Master>
    <link.Master className={style.nav__link} href={urlFor('sofas')} darker small>sofás</link.Master>
    <link.Master className={style.nav__link} href={urlFor('acessorios')} darker small>acessórios</link.Master>
    <link.Master className={style.nav__link} href={urlFor('home')} darker small>blog</link.Master>
  </nav>
