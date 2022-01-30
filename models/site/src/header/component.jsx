import h from '@kuba/h'
import { Compare } from '@kuba/comparebar'
import Header, { Logo, Nav } from '@kuba/header'
import { Search } from '@kuba/searchbar'
import style from './style'
import Tools from './tools'

export default () =>
  <Header>
    <Logo className={style.header__logo} />
    <Tools className={style.header__tools}>
      <Search />
      <Compare />
    </Tools>
    <Nav className={style.header__nav} />
  </Header>
