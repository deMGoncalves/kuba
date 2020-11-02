import h, { Zone } from '@rex/h'
import * as ui from '@ui'
import Logo from './logo'
import Nav from './nav'
import Social from './social'
import style from './style.css'

export default () =>
  <Zone>
    <footer className={style.footer}>
      <Logo className={style.footer__logo} />
      <Social className={style.footer__social} />
      <Nav className={style.footer__nav} />
      <ui.Link className={style.footer__linkButton} color='inverse' href='/' icon='arrow'> Get an invite</ui.Link>
      <ui.P className={style.footer__p} color='inverse'>Copyright {(new Date()).getFullYear()}. All Rights Reserved</ui.P>
    </footer>
  </Zone>
