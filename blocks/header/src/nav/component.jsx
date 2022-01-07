import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import Show from '@kuba/show'
import style from './style'

export default (nav) =>
  <>
    <nav className={style.nav} opened:isTruthy={nav.opened}>
      <link.Master className={style.nav__link} href={urlFor('shapes')} onClick:prevent={() => nav.redirectTo('shapes')} darker medium xxs>Shapes</link.Master>
      <link.Master className={style.nav__link} href={urlFor('marcas')} onClick:prevent={() => nav.redirectTo('marcas')} darker medium xxs>Marcas</link.Master>
    </nav>
    <Hide when={nav.opened}>
      <button.icon.Bars className={style.nav__button} onClick={() => nav.open()} />
    </Hide>
    <Show when={nav.opened}>
      <button.icon.Close className={style.nav__button} onClick={() => nav.close()} />
    </Show>
  </>
