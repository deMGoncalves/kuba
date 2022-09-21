import { component } from '@kuba/marionette'
import h from '@kuba/h'
import i18n from './i18n'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

export default component((footer) => (
  <footer className={style.footer} valid={footer.valid()}>
    <link.Master className={style.footer__link} href={footer.href()} onClick={() => footer.redirect()} darker xxxs bold>
      {i18n.text}
      <icon.ArrowLongRight />
    </link.Master>
  </footer>
))
