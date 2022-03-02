import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import Show from '@kuba/show'
import style from './style'

export default (nav) =>
  <>
    <nav className={[style.nav, nav.className]} opened:isTruthy={nav.opened}>
      <link.Master className={style.nav__link} href={urlFor('home')} onClick:prevent={() => nav.redirectTo('home')} darker xxxs bold>Home</link.Master>
      <link.Master className={style.nav__link} href={urlFor('shapes.home')} onClick:prevent={() => nav.redirectTo('shapes.home')} darker xxxs bold>Shapes</link.Master>
      <link.Master className={style.nav__link} href={urlFor('marcas')} onClick:prevent={() => nav.redirectTo('marcas')} darker xxxs bold>Marcas</link.Master>
    </nav>
    <Hide when={nav.opened}>
      <button.icon.Bars className={style.nav__button} onClick={() => nav.open()} />
    </Hide>
    <Show when={nav.opened}>
      <button.icon.Close className={style.nav__button} onClick={() => nav.close()} />
    </Show>
  </>
