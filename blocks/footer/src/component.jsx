import h from '@kuba/h'
import container from '@kuba/container'
import { Cookie } from '@kuba/cookiebar'
import link from '@kuba/link'
import Logo from '@kuba/logo'
import { urlFor } from '@kuba/router'
import text from '@kuba/text'
import style from './style'

export default (footer) =>
  <footer className={style.footer}>
    <container.Div className={style.footer__container}>
      <section className={style.footer__section}>
        <Logo onClick={() => footer.redirectTo('shapes')} symbol />
        <text.P className={style.footer__text} master dark xxxs>{footer.description}</text.P>
      </section>
      <nav className={style.footer__nav}>
        <link.Master href={urlFor('shapes')} dark xxxs medium>Shapes</link.Master>
        <link.Master href={urlFor('marcas')} dark xxxs medium>Marcas</link.Master>
        <Cookie />
      </nav>
    </container.Div>
  </footer>
