import h from '@rex/h'
import style from './style.css'

export default () =>
  <nav className={style.navigation}>
    <ul className={style.navigation__list}>
      <li>
        <a className={style.navigation__link} href='#' title='link'>Menu Rex 1</a>
      </li>
    </ul>
    <span className={style.navigation__logo}>Logotipo</span>
  </nav>
