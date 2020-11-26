import h, { Zone } from '@rex/h'
import Link from '@rex/link'
import Logo from '@rex/logo'
import text from '@rex/text'
import Nav from './nav'
import Social from './social'
import style from './style.css'

export default () =>
  <Zone>
    <footer className={style.footer}>
      <Logo className={style.footer__logo} color='inverse' />
      <Social className={style.footer__social} />
      <Nav className={style.footer__nav} />
      <Link className={style.footer__linkButton} color='inverse' href='/' icon='arrow'> Get an invite</Link>
      <text.P className={style.footer__p} color='inverse'>Copyright {(new Date()).getFullYear()}. All Rights Reserved</text.P>
    </footer>
  </Zone>
