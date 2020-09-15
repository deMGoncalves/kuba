import h from '@rex/h'
import Logo from './logo'
import Social from './social'
import style from './style.css'

export default () =>
  <footer className={style.footer}>
    <Logo className={style.footer__logo} />
    <Social className={style.footer__social} />
  </footer>
