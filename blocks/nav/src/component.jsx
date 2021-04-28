import h from '@kuba/h'
import icon from '@kuba/icon'
import Side from '@kuba/side'
import style from './style.css'

export default (nav) =>
  <nav className={style.nav} slot={nav.slot}>
    <button className={style.nav__button} onClick={() => nav.toggle()}>
      <icon.Menu className={style.nav__icon} />
    </button>
    <Side onClick={() => nav.toggle()} opened={nav.opened}>
      {nav.links}
    </Side>
  </nav>
