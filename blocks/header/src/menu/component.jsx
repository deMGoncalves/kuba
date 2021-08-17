import h, { Fragment } from '@kuba/h'
import { urlFor } from '@kuba/router'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

export default (props) =>
  <Action className={[style.menu, props.className]}>
    <icon.Menu className={style.menu__icon} alt='Aliquam a metus erat' slot='icon' large />
    <Fragment slot='main'>
      <span className={style.menu__span}>Aliquam a metus erat</span>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>Home</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')} master darker small>Phasellus at</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')} master darker small>Etiam non</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')} master darker small>Aenean ac</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')} master darker small>Ut at</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')} master darker small>Nulla molestie</link.Master>
      <span className={style.menu__span}>Proin vehicula sapien sed</span>
      <link.Master className={style.menu__link} href={urlFor('home')} master small>In finibus</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master small>Donec suscipit</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master small>Aenean mollis</link.Master>
    </Fragment>
  </Action>
