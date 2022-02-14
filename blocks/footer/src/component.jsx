import h from '@kuba/h'
import container from '@kuba/container'
import { Cookie } from '@kuba/cookiebar'
import Logo from '@kuba/logo'
import text from '@kuba/text'
import style from './style'

export default (footer) =>
  <footer className={style.footer}>
    <container.Div className={style.footer__container}>
      <Logo onClick={() => footer.redirectTo('shapes')} symbol />
      <text.P className={style.footer__text} master dark xxxs>{footer.description}</text.P>
      <Cookie />
    </container.Div>
  </footer>
