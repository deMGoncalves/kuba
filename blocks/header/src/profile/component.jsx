import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import link from '@kuba/link'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Action className={[style.profile, props.className]}>
    <icon.Profile className={style.profile__icon} slot='icon' larger />
    <text.Strong className={style.profile__text} slot='header' master darker>Perfil</text.Strong>
    <Fragment slot='main'>
      <link.Master className={style.profile__link} href='//login.usefashion.com/login' master darker small>Sair</link.Master>
    </Fragment>
  </Action>
