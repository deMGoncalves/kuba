import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Action className={[style.profile, props.className]}>
    <icon.Profile className={style.profile__icon} alt='pedidos e minha conta' slot='icon' larger />
    <text.P className={style.profile__p} slot='label' master ligth small>
      pedidos e<br /><strong>minha conta</strong>
    </text.P>
    <text.Strong className={style.profile__strong} slot='header' master darker>pedidos e minha conta</text.Strong>
    <Fragment slot='main'>
      <link.Master className={style.profile__link} href={urlFor('home')} master darker small>lista de desejo</link.Master>
    </Fragment>
  </Action>
