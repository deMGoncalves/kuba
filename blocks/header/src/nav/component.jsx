import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import link from '@kuba/link'
import Show from '@kuba/show'
import style from './style'

export default (nav) =>
  <>
    <nav className={style.nav} opened:isTruthy={nav.opened}>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('about')} darker medium>about</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('values')} darker medium>values</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('design')} darker medium>design</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('arquiteture')} darker medium>architecture</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('components')} darker medium>components</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.edirectTo('patterns')} darker medium>patterns</link.Master>
    </nav>
    <Hide when={nav.opened}>
      <button.icon.Bars className={style.nav__button} onClick={() => nav.open()} />
    </Hide>
    <Show when={nav.opened}>
      <button.icon.Close className={style.nav__button} onClick={() => nav.close()} />
    </Show>
  </>
