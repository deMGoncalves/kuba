import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import text from '@kuba/text'
import Widget from '@kuba/header/src/widget'
import style from './style'

export default (props) =>
  <Widget className={[style.profile, props.className]}>
    <icon.Profile className={style.profile__icon} alt='Orci sem bibendum' slot='icon' larger />
    <text.P className={style.profile__p} slot='label' master darker xxxs>
      Orci sem<br /><strong>bibendum</strong>
    </text.P>
    <Fragment slot='main' />
  </Widget>
