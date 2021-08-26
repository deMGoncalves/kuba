import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style'

export default (props) =>
  <nav {...props} className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')}>Home</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')}>Phasellus at</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')}>Etiam non</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')}>Aenean ac</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')}>Ut at</link.Master>
    <link.Master className={style.nav__link} href={urlFor('departament')}>Nulla molestie</link.Master>
  </nav>
