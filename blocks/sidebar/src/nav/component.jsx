import h from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

export default () =>
  <nav className={style.nav}>
    <link.Master className={style.nav__a} lightest>actions<icon.Plug className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>blocks<icon.Cube className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>buckets<icon.Fill className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>development<icon.Code className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>directives<icon.Random className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>elements<icon.Atom className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>filters<icon.Filter className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>infra<icon.Close className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>models<icon.Close className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>modules<icon.Close className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>pages<icon.Close className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>pixels<icon.Close className={style.nav__icon} small onColor /></link.Master>
    <link.Master className={style.nav__a} lightest>standard<icon.Close className={style.nav__icon} small onColor /></link.Master>
  </nav>
