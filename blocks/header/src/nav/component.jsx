import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import link from '@kuba/link'
import Show from '@kuba/show'
import style from './style'

export default (nav) =>
  <>
    <nav className={style.nav} opened:isTruthy={nav.opened}>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('about')} darker medium>sobre</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('introduction')} darker medium>introducao</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('designSystem')} darker medium>design system</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('components')} darker medium>componentes</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('arquiteture')} darker medium>arquitetura</link.Master>
    </nav>
    <Hide when={nav.opened}>
      <button.icon.Menu className={style.nav__button} onClick={() => nav.open()} />
    </Hide>
    <Show when={nav.opened}>
      <button.icon.Close className={style.nav__button} onClick={() => nav.close()} />
    </Show>
  </>
