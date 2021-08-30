import h from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import Nav from './nav'
import style from './style'

export default (props) =>
  <Action className={[style.menu, props.className]}>
    <icon.Menu className={style.menu__icon} alt='Aliquam a metus erat' slot='icon' large />
    <Nav className={style.menu__nav} slot='main' />
  </Action>
