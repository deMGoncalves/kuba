import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <Action className={[style.services, props.className]}>
    <icon.Comment className={style.services__icon} alt='Curabitur feugiat justo' slot='icon' larger />
    <text.P className={style.services__p} slot='label' master dark small>
      Curabitur<br />
      <text.Strong className={style.services__strong} master darker small bold>feugiat justo</text.Strong>
    </text.P>
    <Fragment slot='main' />
  </Action>
