import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')} darker small>Home</link.Master>
    <link.Master className={style.nav__link} href={urlFor('mindset')} darker small>Mindset</link.Master>
    <link.Master className={style.nav__link} href={urlFor('patterns')} darker small>Patterns</link.Master>
    <link.Master className={style.nav__link} href={urlFor('structure')} darker small>Structure</link.Master>
    <link.Master className={style.nav__link} href={urlFor('components')} darker small>Components</link.Master>
  </nav>
