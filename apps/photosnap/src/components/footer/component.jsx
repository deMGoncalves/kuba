import h from '@rex/h'
import Logo from './logo'
import Nav from './nav'
import Social from './social'
import style from './style.css'

export default () =>
  <footer className={style.footer}>
    <Logo className={style.footer__logo} />
    <Social className={style.footer__social} />
    <Nav className={style.footer__nav} />
  </footer>
