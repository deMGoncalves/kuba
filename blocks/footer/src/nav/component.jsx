import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')} darker small>Home</link.Master>
    <link.Master className={style.nav__link} href={urlFor('estrategia')} darker small>Estratégia</link.Master>
    <link.Master className={style.nav__link} href={urlFor('inspiracao')} darker small>Inspiração</link.Master>
    <link.Master className={style.nav__link} href={urlFor('produto')} darker small>Produto</link.Master>
    <link.Master className={style.nav__link} href={urlFor('venda')} darker small>Venda</link.Master>
  </nav>
