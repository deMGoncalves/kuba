import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style'

export default (props) =>
  <nav {...props} className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')} master darker small>Home</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')} master darker small>Phasellus at</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')} master darker small>Etiam non</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')} master darker small>Aenean ac</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')} master darker small>Ut at</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')} master darker small>Nulla molestie</link.Master>
  </nav>
