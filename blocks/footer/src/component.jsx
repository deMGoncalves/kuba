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
        <Logo onClick={() => footer.redirectTo('home')} symbol />
        <text.P className={style.footer__text} master dark xxxs>{footer.description}</text.P>
      </section>
      <nav className={style.footer__nav}>
        <link.Master href={urlFor('home')} dark xxxs medium>Home</link.Master>
        <link.Master href={urlFor('shapes.home')} dark xxxs medium>Shapes</link.Master>
        <link.Master href={urlFor('marcas.home')} dark xxxs medium>Marcas</link.Master>
        <Cookie />
      </nav>
    </container.Div>
  </footer>
