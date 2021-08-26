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
      <link.Master className={style.menu__link} href={urlFor('home')}>Home</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')}>Phasellus at</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')}>Etiam non</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')}>Aenean ac</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')}>Ut at</link.Master>
      <link.Master className={style.menu__link} href={urlFor('departament')}>Nulla molestie</link.Master>
      <span className={style.menu__span}>Proin vehicula sapien sed</span>
      <link.Master className={style.menu__link} href={urlFor('home')}>In finibus</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')}>Donec suscipit</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')}>Aenean mollis</link.Master>
    </Fragment>
  </Action>
