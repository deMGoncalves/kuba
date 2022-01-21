import h from '@kuba/h'
import { Compare } from '@kuba/comparebar'
import Header, { Logo, Nav } from '@kuba/header'
import style from './style'

export default () =>
  <Header>
    <Nav className={style.header__nav} />
    <Logo className={style.header__logo} />
    <Compare className={style.header__compare} />
  </Header>
