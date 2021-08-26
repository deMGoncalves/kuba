import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <Action className={[style.profile, props.className]}>
    <icon.Profile className={style.profile__icon} alt='Orci sem bibendum' slot='icon' larger />
    <text.P className={style.profile__p} slot='label' master darker xxxs>
      Orci sem<br /><strong>bibendum</strong>
    </text.P>
    <Fragment slot='main' />
  </Action>
