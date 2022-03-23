import { Compare } from '@kuba/comparebar'
import { Search } from '@kuba/searchbar'
import h from '@kuba/h'
import Header, { Logo, Nav } from '@kuba/header'
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
