import h from '@kuba/h'
import { Compare } from '@kuba/comparebar'
import Header, { Logo, Nav } from '@kuba/header'
import { SearchButton } from '@kuba/searchbar'
import style from './style'

export default () =>
  <Header>
    <Nav className={style.header__nav} />
    <Logo className={style.header__logo} />
    <Compare className={style.header__compare} />
    <SearchButton className={style.header__search}/>
  </Header>
