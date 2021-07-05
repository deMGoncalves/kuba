import h from '@kuba/h'
import Container from '@kuba/container'
import Logo from '@kuba/logo'
import Search from '@kuba/search'
import Bookmark from './bookmark'
import Darlings from './darlings'
import Menu from './menu'
import Nav from './nav'
import Profile from './profile'
import Services from './services'
import style from './style.css'

export default (props) =>
  <header {...props} className={[style.header, props.className]}>
    <Container className={style.header__container}>
      <div className={style.header__div}>
        <Logo className={style.header__logo} />
        <Search className={style.header__search} />
      </div>
      <div className={style.header__div}>
        <Services className={style.header__services} />
        <Bookmark className={style.header__bookmark} />
        <Profile className={style.header__profile} />
        <Menu className={style.header__menu} />
      </div>
    </Container>
    <Container className={[style.header__container, style.desktop]}>
      <Nav className={style.header__nav} />
      <Darlings className={style.header__darlings} />
    </Container>
  </header>
