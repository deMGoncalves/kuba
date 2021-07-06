import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')} darker small>Home</link.Master>
    <link.Master className={style.nav__link} href={urlFor('cadeiras')} darker small>Cadeiras</link.Master>
    <link.Master className={style.nav__link} href={urlFor('sofas')} darker small>Sofás</link.Master>
    <link.Master className={style.nav__link} href={urlFor('acessorios')} darker small>Acessórios</link.Master>
    <link.Master className={style.nav__link} href={urlFor('blog')} darker small>Blog</link.Master>
  </nav>
