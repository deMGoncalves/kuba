import h from '@rex/htmlparser'
import Container from '@rex/container'
// import Button from '@rex/button'
// import Link from '@rex/link'
import Logo from '@rex/logo'
import style from './style.css'

export default (header) =>
  <header className={style.header}>
    <Container className={style.header__container}>
      <div className={style.header__partner}>nega</div>
      <div className={style.header__menu}>Menu</div>
      <Logo className={style.header__logo} />
      <div className={style.header__search}>Search</div>
      <div className={style.header__services}>Services</div>
      <div className={style.header__user}>User</div>
      <div className={style.header__bag}>Bag</div>
      <div className={style.header__region}>Region</div>

      {/* <button className={[style.header__toggle, style[header.status]]} onClick_prevent_stop={() => header.toggle()}>Menu</button>
      <nav className={style.header__nav}>
        <Link className={style.header__link} href='./stories'>Stories</Link>
        <Link className={style.header__link} href='./features'>Features</Link>
        <Link className={style.header__link} href='./pricing'>Pricing</Link>
      </nav>
      <Button className={style.header__button} href='/'>Get in invite</Button> */}
    </Container>
  </header>
