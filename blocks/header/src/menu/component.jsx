import h from '@kuba/h'
import icon from '@kuba/icon'
import Nav from './nav'
import Widget from '@kuba/header/src/widget'
import style from './style'

export default (props) =>
  <Widget className={[style.menu, props.className]}>
    <icon.Menu className={style.menu__icon} alt='Aliquam a metus erat' slot='icon' large />
    <Nav className={style.menu__nav} slot='main' />
  </Widget>
