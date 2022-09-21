import { urlFor } from '@kuba/router'
import button from '@kuba/button'
import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import link from '@kuba/link'
import Show from '@kuba/show'
import style from './style'
import i18n from './i18n'

export default (nav) =>
  <>
    <nav className={[style.nav, nav.className]} opened:isTruthy={nav.opened}>
      <link.Master className={style.nav__link} href={urlFor('home')} onClick:prevent={() => nav.redirectTo('home')} darker xxxs bold>{i18n.home}</link.Master>
      <link.Master className={style.nav__link} href={urlFor('shapes.home')} onClick:prevent={() => nav.redirectTo('shapes.home')} darker xxxs bold>{i18n.shapes}</link.Master>
      <link.Master className={style.nav__link} href={urlFor('marcas.home')} onClick:prevent={() => nav.redirectTo('marcas.home')} darker xxxs bold>{i18n.marcas}</link.Master>
    </nav>
    <Hide when={nav.opened}>
      <button.icon.Bars className={style.nav__button} onClick={() => nav.open()} />
    </Hide>
    <Show when={nav.opened}>
      <button.icon.Close className={style.nav__button} onClick={() => nav.close()} />
    </Show>
  </>
